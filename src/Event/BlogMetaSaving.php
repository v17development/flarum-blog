<?php

namespace V17Development\FlarumBlog\Event;

use Flarum\User\User;
use V17Development\FlarumBlog\BlogMeta\BlogMeta;

class BlogMetaSaving
{
    /**
     * @var BlogMeta
     */
    public $blogMeta;

    /**
     * @var User
     */
    public $actor;

    /**
     * @var array
     */
    public $data;

    public function __construct(BlogMeta $blogMeta, User $actor, array $data)
    {
        $this->blogMeta = $blogMeta;
        $this->actor = $actor;
        $this->data = $data;
    }
}
