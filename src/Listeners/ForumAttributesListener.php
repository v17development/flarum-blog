<?php

namespace V17Development\FlarumBlog\Listeners;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Illuminate\Events\Dispatcher;

class ForumAttributesListener
{
    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        // Get Flarum settings
        $this->settings = $settings;
    }

    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'addForumAttributes']);
    }

    /**
     * @param Serializing $event
     */
    public function addForumAttributes(Serializing $event)
    {
        // Populate forum settings
        if ($event->isSerializer(ForumSerializer::class)) {
            $event->attributes['blogTags'] = explode("|", $this->settings->get('blog_tags'));
            $event->attributes['blogRedirectsEnabled'] = $this->settings->get('blog_redirects_enabled', 'both');
            $event->attributes['blogHideTags'] = $this->settings->get('blog_hide_tags', false);
            $event->attributes['canApproveBlogPosts'] = $event->actor->can('blog.canApprovePosts');
        }
    }
}
