<?php

namespace V17Development\FlarumBlog\Subscribers;

use Flarum\Discussion\Event as DiscussionEvent;
use V17Development\FlarumBlog\BlogMeta\BlogMeta;
use V17Development\FlarumBlog\Event\BlogMetaCreated;
use V17Development\FlarumBlog\Event\BlogMetaSaving;
use V17Development\FlarumSeo\SeoMeta\SeoMeta;
use V17Development\FlarumSeo\SeoProperties;
use V17Development\FlarumSeo\SeoMeta\Event\Created;

/**
 * Subscribe to discussion creation, update or deleted
 */
class SeoBlogSubscriber
{
    public function __construct(private SeoProperties $seoProperties) {}

    /**
     * Subscribe to events
     * 
     * @param $events
     */
    public function subscribe($events)
    {
        $events->listen(DiscussionEvent\Deleting::class, [$this, 'onDiscussionUpdate']);
        $events->listen(DiscussionEvent\Renamed::class, [$this, 'onDiscussionUpdate']);
        $events->listen(BlogMetaSaving::class, [$this, 'onBlogMetaUpdate']);
        $events->listen(BlogMetaCreated::class, [$this, 'onBlogMetaUpdate']);
        $events->listen(Created::class, [$this, 'onMetaCreated']);
    }

    /**
     * Handle model event
     *
     * @param $event
     */
    public function onDiscussionUpdate($event)
    {
        // Only do something with discussions that have a blog_meta relationship
        if (!isset($event->discussion->blogMeta->id)) {
            return;
        }

        // Find relevant meta
        $meta = SeoMeta::findByObjectType('blogs', $event->discussion->blogMeta->id);

        // Find and delete meta-data
        if ($event::class === DiscussionEvent\Deleting::class) {
            // Meta existed, delete
            if ($meta) {
                $meta->delete();
            }

            return;
        }

        // Create new meta by model
        if (!$meta) {
            $meta = SeoMeta::build('blogs', $event->discussion->blogMeta->id);
        }

        // Do not auto update
        if (!$meta->auto_update_data) {
            return;
        }

        $this->updateMeta($meta, $event->discussion->blogMeta);

        // Update
        $meta->save();
    }

    /**
     * Handle Blog meta update
     */
    public function onBlogMetaUpdate($event)
    {
        // Make sure to only process meta's that have an ID
        if (!isset($event->blogMeta->id)) return;

        // Find meta
        $meta = SeoMeta::findByObjectType('blogs', $event->blogMeta->id);

        $this->updateMeta($meta, $event->blogMeta);

        // Update
        $meta->save();
    }

    /**
     * Handle SEO-meta created event for blogs
     * 
     * @param Created $event
     */
    public function onMetaCreated(Created $event)
    {
        // Only update meta data if object type matches
        if ($event->objectType !== 'blogs') return;

        // Find blogMeta
        $blogMeta = BlogMeta::find($event->objectId);

        $this->updateMeta($event->seoMeta, $blogMeta);

        $event->seoMeta->save();
    }

    /**
     * Public function to update seoMeta
     */
    public function updateMeta($seoMeta, $blogMeta)
    {
        $seoMeta->title = $blogMeta->discussion->title;

        $seoMeta->created_at = $blogMeta->discussion->created_at;

        $firstPost = $blogMeta->discussion->firstPost;

        // If a discussion has a first post, use edited_at time if intial post was more recent edited than the last post was posted 
        if ($firstPost) {
            $seoMeta->updated_at = $firstPost->edited_at > $blogMeta->discussion->last_posted_at ? $firstPost->edited_at : $blogMeta->discussion->last_posted_at;

            $content = $firstPost->formatContent();

            // Set estimated reading time
            $estimatedReadingTime = $this->seoProperties->getEstimatedReadingTime($content);

            // If higher than zero, update reading time
            if ($estimatedReadingTime > 0) {
                $seoMeta->estimated_reading_time = $estimatedReadingTime;
            }
        } else {
            $seoMeta->updated_at = $blogMeta->discussion->last_posted_at;
        }

        // Set description
        $seoMeta->description = $blogMeta->summary;

        // Set description
        $seoMeta->description = $blogMeta->summary;

        // Only update image if source was set to auto and is not managed by a different extension
        if (!$seoMeta->open_graph_image_source || $seoMeta->open_graph_image_source === 'auto' || $seoMeta->open_graph_image_source === 'v17development-flarum-blog') {
            $seoMeta->open_graph_image = $blogMeta->featured_image;
            $seoMeta->open_graph_image_source = "v17development-flarum-blog";
        }
    }
}
