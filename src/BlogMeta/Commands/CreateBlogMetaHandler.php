<?php

namespace V17Development\FlarumBlog\BlogMeta\Commands;

use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Discussion\DiscussionRepository;
use Flarum\Settings\SettingsRepositoryInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use V17Development\FlarumBlog\BlogMeta\BlogMeta;
use V17Development\FlarumBlog\BlogMeta\BlogMetaValidator;
use Illuminate\Support\Arr;
use V17Development\FlarumBlog\Event\BlogMetaSaving;

class CreateBlogMetaHandler
{
    /**
     * @var DiscussionRepository
     */
    protected $discussion;

    /**
     * @var TranslatorInterface
     */
    protected $translator;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var BlogMetaValidator
     */
    protected $validator;

    /**
     * @var Dispatcher
     */
    protected $dispatcher;

    public function __construct(DiscussionRepository $discussion, TranslatorInterface $translator, SettingsRepositoryInterface $settings, BlogMetaValidator $validator, Dispatcher $dispatcher)
    {
        $this->discussion = $discussion;
        $this->translator = $translator;
        $this->settings = $settings;
        $this->validator = $validator;
        $this->dispatcher = $dispatcher;
    }

    /**
     * Handle new support blog meta
     */
    public function handle(CreateBlogMeta $command)
    {
        $actor = $command->actor;

        // Make sure the actor can edit blog-data
        $actor->assertCan('blog.writeArticles');

        // Data
        $data = $command->data;

        // Validate discussion exists
        $discussionId = Arr::get($data, 'relationships.discussion.data.id');
        $discussion = $this->discussion->findOrFail($discussionId, $actor);

        // Create new blog meta
        $blogMeta = BlogMeta::firstOrNew([
            'discussion_id' => $discussion->id
        ]);

        $blogMeta->discussion_id = $discussion->id;

        $blogMeta->featured_image = Arr::get($data, 'attributes.featuredImage', null);
        $blogMeta->summary = Arr::get($data, 'attributes.summary', null);
        $blogMeta->is_featured = Arr::get($data, 'attributes.isFeatured', false);
        $blogMeta->is_sized = Arr::get($data, 'attributes.isSized', false);

        // Auto approve if an article already existed or it does not require a review
        if ($discussion->created_at->diffInSeconds(\Carbon\Carbon::now()) > 30 || $this->settings->get('blog_requires_review', false) == false) {
            $blogMeta->is_pending_review = false;
        } else {
            $blogMeta->is_pending_review = !$actor->can('blog.autoApprovePosts');
        }

        // Allow extensions to add their own attributes
        $this->dispatcher->dispatch(
            new BlogMetaSaving($blogMeta, $actor, $data)
        );

        // Validate
        $this->validator->assertValid($blogMeta->getDirty());

        $blogMeta->save();

        return $blogMeta;
    }
}
