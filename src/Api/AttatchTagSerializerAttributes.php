<?php

namespace V17Development\FlarumBlog\Api;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Api\Event\Serializing;
use Flarum\Tags\Api\Serializer\TagSerializer;

class AttatchTagSerializerAttributes
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
     * @param Serializing $event
     */
    public function __invoke(TagSerializer $serializer, $model, $attributes)
    {
        // Get blog tags
        $blogTags = explode("|", $this->settings->get('blog_tags', ''));
        
        // Add isBlog attribute
        $attributes['isBlog'] = (bool) in_array($model->id, $blogTags) || ($model->parent_id && in_array($model->parent->id, $blogTags));

        return $attributes;
    }
}
