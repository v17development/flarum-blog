<?php

namespace V17Development\FlarumBlog\Event;

use V17Development\FlarumBlog\BlogMeta\BlogMeta;

class BlogMetaCreated
{
    /**
     * @var BlogMeta
     */
    public $blogMeta;

    public function __construct(BlogMeta $blogMeta)
    {
        $this->blogMeta = $blogMeta;
    }
}
