<?php

namespace V17Development\FlarumBlog\Controller;

use Flarum\Frontend\Document;
use Flarum\Api\Client;
use Flarum\Http\UrlGenerator;
use Flarum\Http\Exception\RouteNotFoundException;
use Flarum\Settings\SettingsRepositoryInterface;
use Psr\Http\Message\ServerRequestInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use Flarum\Tags\TagRepository;
use Illuminate\Support\Arr;
use V17Development\FlarumBlog\BlogMeta\BlogMeta;

class BlogItemController
{
    public function __construct(Client $api, UrlGenerator $url, SettingsRepositoryInterface $settings, TagRepository $tagRepository, TranslatorInterface $translator)
    {
        $this->api = $api;
        $this->url = $url;
        $this->settings = $settings;
        $this->translator = $translator;
        $this->tagRepository = $tagRepository;
    }

    public function __invoke(Document $document, ServerRequestInterface $request)
    {
        $queryParams = $request->getQueryParams();

        // Find blog item
        $apiDocument = $this->getApiDocument($request, (int) Arr::get($queryParams, 'id'));

        // Article not found
        if($apiDocument === null) {
            if(class_exists("\V17Development\FlarumSeo\Extend")) {
                \V17Development\FlarumSeo\Extend::setTitle($this->translator->trans('v17development-flarum-blog.forum.blog'));
            }

            return $document;
        }

        // Add SEO properties
        if(class_exists("V17Development\FlarumSeo\Extend")) {
            // Set article page title
            \V17Development\FlarumSeo\Extend::setTitle($apiDocument->data->attributes->title . ' - ' . $this->translator->trans('v17development-flarum-blog.forum.blog'));

            // Set social media title
            \V17Development\FlarumSeo\Extend::setTitle($apiDocument->data->attributes->title, false);

            // Article URL
            $fullArticleUrl = $this->url->to('forum')->route('blog.post', ['id' => $apiDocument->data->attributes->slug]);

            \V17Development\FlarumSeo\Extend::setUrl($fullArticleUrl, false);
            \V17Development\FlarumSeo\Extend::setCanonicalUrl($fullArticleUrl);

            \V17Development\FlarumSeo\Extend::setSchemaJson('@type', 'BlogPosting');

            // Article image
            $articleHasImage = false;

            // Add summary/image
            if(isset($apiDocument->data->relationships->blogMeta->data->id) && $blogMeta = BlogMeta::find($apiDocument->data->relationships->blogMeta->data->id)) {
                // Add article summary
                if($blogMeta->summary) {
                    \V17Development\FlarumSeo\Extend::setDescription($blogMeta->summary);
                }

                // Add article image
                if($blogMeta->featured_image) {
                    $articleHasImage = true;
                    \V17Development\FlarumSeo\Extend::setImage($blogMeta->featured_image);
                }
            }

            // Set featured image
            if(!$articleHasImage && $this->settings->get('blog_default_image_path', null) !== null) {
                \V17Development\FlarumSeo\Extend::setImage($this->url->to('forum')->base() . "/assets/" . $this->settings->get('blog_default_image_path', null));
            }

            // Add article changed
            \V17Development\FlarumSeo\Extend::setPublishedOn($apiDocument->data->attributes->createdAt);

            // Add article update time
            if (isset($apiDocument->data->attributes->metaLastEditedTime)) {
                \V17Development\FlarumSeo\Extend::setUpdatedOn($apiDocument->data->attributes->metaLastEditedTime);
            }
        }


        // Set payload
        $document->payload['apiDocument'] = $apiDocument;

        return $document;
    }

    /**
     * Preload blog posts
     *
     * @param ServerRequestInterface $request
     * @param int $id
     *
     * @return object
     */
    private function getApiDocument(ServerRequestInterface $request, $id)
    {
        $response = $this->api->withParentRequest($request)->get("/discussions/{$id}");

        if ($response->getStatusCode() === 404) {
            throw new RouteNotFoundException();
        }

        return json_decode($response->getBody());
    }
}
