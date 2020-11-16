<?php

namespace V17Development\FlarumBlog\Api\Controller;

use Flarum\Api\Controller\AbstractCreateController;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use V17Development\FlarumBlog\Api\Serializer\BlogMetaSerializer;
use V17Development\FlarumBlog\BlogMeta\Commands\CreateBlogMeta;

class CreateBlogMetaController extends AbstractCreateController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = BlogMetaSerializer::class;

    public $include = ['discussion'];

    protected $bus;

    /**
     * @param Dispatcher $bus
     */
    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        return $this->bus->dispatch(
            new CreateBlogMeta($request->getAttribute('actor'), Arr::get($request->getParsedBody(), 'data', []))
        );
    }
}
