<?php

namespace V17Development\FlarumBlog\BlogMeta\Commands;

use Flarum\Foundation\ValidationException;
use Flarum\Discussion\Discussion;
use Flarum\Discussion\DiscussionRepository;
use Flarum\Settings\SettingsRepositoryInterface;
use Symfony\Component\Translation\TranslatorInterface;
use Tobscure\JsonApi\Exception\InvalidParameterException;
use V17Development\FlarumBlog\BlogMeta\BlogMeta;
use V17Development\FlarumBlog\BlogMeta\BlogMetaValidator;
use Illuminate\Support\Arr;

class UpdateBlogMetaHandler
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
     * @param DiscussionRepository $discussion
     * @param TranslatorInterface $translator
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(DiscussionRepository $discussion, TranslatorInterface $translator, SettingsRepositoryInterface $settings, BlogMetaValidator $validator)
    {
        $this->discussion = $discussion;
        $this->translator = $translator;
        $this->settings = $settings;
        $this->validator = $validator;
    }

    /**
     * Handle new support blog meta
     */
    public function handle(UpdateBlogMeta $command)
    {
        $actor = $command->actor;

        // Make sure the actor can edit blog-data
        $actor->assertCan('blog.writeArticles');

        // Data
        $id = $command->id;
        $data = $command->data;

        // Validate ID
        if(empty($command->id) || !is_numeric($command->id)) {
            throw new ValidationException([
                'message' => $this->translator->trans(
                    'v17development-flarum-blog.forum.validation.missing_id'
                )
            ]);
        }

        // Update new blog meta
        $blogMeta = BlogMeta::find($command->id);
    
        // Featured image
        if(Arr::has($data, 'attributes.featuredImage')) {
            $blogMeta->featured_image = Arr::get($data, 'attributes.featuredImage', null);
        }

        // Summary
        if(Arr::has($data, 'attributes.summary')) {
            $blogMeta->summary = Arr::get($data, 'attributes.summary', null);
        }

        // Is featured
        if(Arr::has($data, 'attributes.isFeatured')) {
            $blogMeta->is_featured = Arr::get($data, 'attributes.isFeatured', false);
        }
        
        // Is sized
        if(Arr::has($data, 'attributes.isSized')) {
            $blogMeta->is_sized = Arr::get($data, 'attributes.isSized', false);
        }

        // Update pending review
        if($actor->can('blog.canApprovePosts') && $blogMeta->is_pending_review && Arr::has($data, 'attributes.isPendingReview')) {
            $blogMeta->is_pending_review = Arr::get($data, 'attributes.isPendingReview', false);
        }

        // Validate
        $this->validator->assertValid($blogMeta->getDirty());

        $blogMeta->save();

        return $blogMeta;
    }
}