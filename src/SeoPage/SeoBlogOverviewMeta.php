<?php

namespace V17Development\FlarumBlog\SeoPage;

use Flarum\Foundation\DispatchEventsTrait;
use Flarum\Tags\Tag;
use Flarum\Tags\TagRepository;
use Illuminate\Support\Arr;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\Translation\Translator;
use Psr\Http\Message\ServerRequestInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use V17Development\FlarumSeo\Page\PageDriverInterface;
use V17Development\FlarumSeo\SeoMeta\SeoMeta;
use V17Development\FlarumSeo\SeoProperties;

class SeoBlogOverviewMeta implements PageDriverInterface
{
    use DispatchEventsTrait;

    /**
     * @var TagRepository
     */
    protected $tagRepository;

    /**
     * @var Translator
     */
    protected $translator;

    /**
     * @param TagRepository $tagRepository
     * @param Dispatcher $events
     */
    public function __construct(
        TagRepository $tagRepository,
        Dispatcher $events,
        TranslatorInterface $translator,
    ) {
        $this->tagRepository = $tagRepository;
        $this->events = $events;
        $this->translator = $translator;
    }

    public function extensionDependencies(): array
    {
        return [];
    }

    public function handleRoutes(): array
    {
        return ['blog.overview', 'blog.category'];
    }

    /**
     * @param ServerRequestInterface $request
     * @param SeoProperties $properties
     */
    public function handle(
        ServerRequestInterface $request,
        SeoProperties $properties
    ) {
        // Get tag slug from params
        $category = Arr::get($request->getQueryParams(), 'category');

        try {
            $category = Tag::where('slug', $category)->firstOrFail();

            $properties->setTitle($this->translator->trans('v17development-flarum-blog.forum.blog'));
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            $properties->setTitle($this->translator->trans('v17development-flarum-blog.forum.blog'));

            // Do nothing, no model found
            return;
        }

        // Get seo-meta-date
        $seoMeta = SeoMeta::findByModelOrCreate(
            $category
        );

        // Run events in case the model was created
        $this->dispatchEventsFor($seoMeta);

        // Generate data
        $properties->generateTagsFromMetaData($seoMeta);

        // Set blog title
        $properties->setTitle($seoMeta->title . " - " . $this->translator->trans('v17development-flarum-blog.forum.blog'));
    }
}
