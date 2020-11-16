<?php

namespace V17Development\FlarumBlog\BlogMeta\Commands;

use Flarum\User\User;

class UpdateBlogMeta
{
    public $actor;
    
    public $id;

    public $data;

    public function __construct(User $actor, $id, array $data)
    {
        $this->actor = $actor;
        $this->id = $id;
        $this->data = $data;
    }
}