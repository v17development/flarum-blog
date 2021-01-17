<?php

namespace V17Development\FlarumBlog\Controller;

use Flarum\Frontend\Document;
use Psr\Http\Message\ServerRequestInterface;

class BlogComposerController
{
    public function __invoke(Document $document, ServerRequestInterface $request)
    {
        return $document;
    }
}