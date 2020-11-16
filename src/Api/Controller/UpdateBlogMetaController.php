<?php

namespace V17Development\FlarumBlog\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use V17Development\FlarumBlog\Api\Serializer\BlogMetaSerializer;
use V17Development\FlarumBlog\BlogMeta\Commands\UpdateBlogMeta;

class UpdateBlogMetaController extends AbstractShowController
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
        $queryParams = $request->getQueryParams();

        return $this->bus->dispatch(
            new UpdateBlogMeta($request->getAttribute('actor'), Arr::get($queryParams, 'id'), Arr::get($request->getParsedBody(), 'data', []))
        );
    }
}
