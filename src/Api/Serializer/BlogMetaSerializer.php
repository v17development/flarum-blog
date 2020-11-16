<?php

namespace V17Development\FlarumBlog\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\DiscussionSerializer;

class BlogMetaSerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'blogMeta';

    /**
     * {@inheritdoc}
     */
    protected function getDefaultAttributes($meta)
    {
        return [
            'featuredImage'     => $meta->featured_image,
            'summary'           => $meta->summary,
            'isFeatured'        => $meta->is_featured,
            'isSized'           => $meta->is_sized,
            'isPendingReview'   => $meta->is_pending_review
        ];
    }

    protected function discussion($meta)
    {
        return $this->hasOne($meta, DiscussionSerializer::class);
    }
}
