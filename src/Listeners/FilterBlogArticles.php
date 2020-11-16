<?php

namespace V17Development\FlarumBlog\Listeners;

use Flarum\Event\ConfigureDiscussionGambits;
use Illuminate\Contracts\Events\Dispatcher;
use V17Development\FlarumBlog\Gambit\BlogGambit;

class FilterBlogArticles
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureDiscussionGambits::class, [$this, 'ConfigureDiscussionGambits']);
    }

    /**
     * @param ConfigureDiscussionGambits $event
     */
    public function ConfigureDiscussionGambits(ConfigureDiscussionGambits $event)
    {
        $event->gambits->add(BlogGambit::class);
    }
}
