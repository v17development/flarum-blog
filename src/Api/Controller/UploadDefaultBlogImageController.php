<?php
namespace V17Development\FlarumBlog\Api\Controller;

use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Support\Str;
use Illuminate\Support\Arr;
use Intervention\Image\ImageManager;
use League\Flysystem\Adapter\Local;
use League\Flysystem\Filesystem;
use League\Flysystem\MountManager;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Flarum\Api\Controller\ShowForumController;
use Flarum\Foundation\Paths;

class UploadDefaultBlogImageController extends ShowForumController
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var Paths
     */
    protected $paths;

    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings, Paths $paths)
    {
        $this->settings = $settings;
        $this->paths = $paths;
    }
    /**
     * {@inheritdoc}
     */
    public function data(ServerRequestInterface $request, Document $document)
    {
        $request->getAttribute('actor')->assertAdmin();

        $file = Arr::get($request->getUploadedFiles(), 'blog_default_image');
        $tmpFile = tempnam($this->paths->storage.'/tmp', 'blog-default');
        $file->moveTo($tmpFile);

        $mount = new MountManager([
            'source' => new Filesystem(new Local(pathinfo($tmpFile, PATHINFO_DIRNAME))),
            'target' => new Filesystem(new Local($this->paths->public.'/assets')),
        ]);

        if (($path = $this->settings->get('blog_default_image_path')) && $mount->has($file = "target://$path")) {
            $mount->delete($file);
        }

        $uploadName = 'blog-default-'.Str::lower(Str::random(8)).'.png';
        $mount->move('source://'.pathinfo($tmpFile, PATHINFO_BASENAME), "target://$uploadName");
        $this->settings->set('blog_default_image_path', $uploadName);
        return parent::data($request, $document);
    }
}