<?php

namespace V17Development\FlarumBlog\Listeners;

use Flarum\Api\Event\WillGetData;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Api\Serializer\BasicDiscussionSerializer;
use Flarum\Event\GetApiRelationship;
use Illuminate\Contracts\Events\Dispatcher;
use V17Development\FlarumBlog\Api\Serializer\BlogMetaSerializer;

class AddDiscussionBlogMetaRelationship
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(GetApiRelationship::class, [$this, 'getApiRelationship']);
        $events->listen(WillGetData::class, [$this, 'includeRelationship']);
    }

    /**
     * @param WillGetData $event
     */
    public function includeRelationship(WillGetData $event)
    {
        if ($event->controller->serializer === DiscussionSerializer::class) {
            $event->addInclude(['blogMeta', 'firstPost', 'user']);
        }
    }

    /**
     * @param GetApiRelationship $event
     */
    public function getApiRelationship(GetApiRelationship $event)
    {
        if ($event->isRelationship(BasicDiscussionSerializer::class, 'blogMeta')) {
            return $event->serializer->hasOne($event->model, BlogMetaSerializer::class, 'blogMeta');
        }
    }
}