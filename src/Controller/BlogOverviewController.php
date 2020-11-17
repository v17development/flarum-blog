<?php

namespace V17Development\FlarumBlog\Controller;

use Flarum\Frontend\Document;
use Flarum\Api\Controller\ListDiscussionsController;
use Flarum\Api\Client;
use Flarum\User\User;
use Psr\Http\Message\ServerRequestInterface;
use Symfony\Component\Translation\TranslatorInterface;
use Flarum\Tags\TagRepository;
use Illuminate\Support\Arr;

class BlogOverviewController
{
    public function __construct(Client $api, TagRepository $tagRepository, TranslatorInterface $translator)
    {
        $this->api = $api;
        $this->translator = $translator;
        $this->tagRepository = $tagRepository;
    }

    public function __invoke(Document $document, ServerRequestInterface $request)
    {
        $queryParams = $request->getQueryParams();

        if(class_exists("V17Development\FlarumSeo\Extend")) {
            \V17Development\FlarumSeo\Extend::setTitle($this->translator->trans('v17development-flarum-blog.forum.blog'));
        }

        // Preload blog posts
        $apiDocument = $this->getApiDocument($request->getAttribute('actor'), [
            "filter" => [
                "q" => "is:blog" . (Arr::get($queryParams, 'category') ? " tag:" . Arr::get($queryParams, 'category') : "")
            ]
        ]);

        // Set payload
        $document->payload['apiDocument'] = $apiDocument;

        return $document;
    }

    /**
     * Preload blog posts
     *
     * @param User  $actor
     * @param array $params
     *
     * @return object
     */
    private function getApiDocument(User $actor, array $params)
    {
        $response = $this->api->send(ListDiscussionsController::class, $actor, $params);

        // Unfortunately there were no records found
        if ($response->getStatusCode() === 404) {
            return null;
        }

        return json_decode($response->getBody());
    }
}