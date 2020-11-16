<?php

namespace V17Development\FlarumBlog\BlogMeta\Commands;

use Flarum\User\User;
use Flarum\Discussion\Discussion;

class CreateBlogMeta
{
    public $actor;
    
    public $data;

    public function __construct(User $actor, array $data)
    {
        $this->actor = $actor;
        $this->data = $data;
    }
}
