<?php

namespace V17Development\FlarumBlog;

// Flarum classes
use Flarum\Api\Controller as FlarumController;
use Flarum\Api\Serializer\BasicDiscussionSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;
use Flarum\Discussion\Discussion;
use Flarum\Discussion\Event\Saving;
use Flarum\Discussion\Filter\DiscussionFilterer;
use Flarum\Discussion\Search\DiscussionSearcher;
use Flarum\Tags\Api\Serializer\TagSerializer;

// Controllers
use V17Development\FlarumBlog\Controller\BlogOverviewController;
use V17Development\FlarumBlog\Controller\BlogItemController;
use V17Development\FlarumBlog\Controller\BlogComposerController;

// Access
use V17Development\FlarumBlog\Access\ScopeDiscussionVisibility;
// API controllers
use V17Development\FlarumBlog\Api\AttachForumSerializerAttributes;
use V17Development\FlarumBlog\Api\AttatchTagSerializerAttributes;
use V17Development\FlarumBlog\Api\Controller\CreateBlogMetaController;
use V17Development\FlarumBlog\Api\Controller\UpdateBlogMetaController;
use V17Development\FlarumBlog\Api\Controller\UploadDefaultBlogImageController;
use V17Development\FlarumBlog\Api\Controller\DeleteDefaultBlogImageController;
use V17Development\FlarumBlog\Api\Serializer\BlogMetaSerializer;
// Listeners
use V17Development\FlarumBlog\Listeners\CreateBlogMetaOnDiscussionCreate;

// Models
use V17Development\FlarumBlog\BlogMeta\BlogMeta;

// Filters
use V17Development\FlarumBlog\Query\FilterDiscussionsForBlogPosts;
use V17Development\FlarumBlog\Query\BlogArticleFilterGambit;

// SEO
use V17Development\FlarumBlog\SeoPage\SeoBlogOverviewMeta;
use V17Development\FlarumBlog\SeoPage\SeoBlogArticleMeta;
use V17Development\FlarumBlog\Subscribers\SeoBlogSubscriber;

$extend = [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/Forum.less')
        ->route('/blog', 'blog.overview', BlogOverviewController::class)
        ->route('/blog/compose', 'blog.compose', BlogComposerController::class)
        ->route('/blog/category/{category}', 'blog.category', BlogOverviewController::class)
        ->route('/blog/{id:[\d\S]+(?:-[^/]*)?}', 'blog.post', BlogItemController::class)
    // Shall we add RSS?
    // ->get('/blog/rss.xml', 'blog.rss.xml', RSS::class)
    ,
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/Admin.less'),

    (new Extend\Routes('api'))
        ->post('/blogMeta', 'blog.meta', CreateBlogMetaController::class)
        ->patch('/blogMeta/{id}', 'blog.meta.edit', UpdateBlogMetaController::class)
        ->post('/blog_default_image', 'blog.default_image.upload', UploadDefaultBlogImageController::class)
        ->delete('/blog_default_image', 'blog.default_image.delete', DeleteDefaultBlogImageController::class),

    new Extend\Locales(__DIR__ . '/locale'),

    (new Extend\Model(Discussion::class))
        ->hasOne('blogMeta', BlogMeta::class, 'discussion_id'),

    (new Extend\ModelVisibility(Discussion::class))
        ->scope(ScopeDiscussionVisibility::class),

    (new Extend\ApiController(FlarumController\CreateDiscussionController::class))
        ->addInclude(['blogMeta', 'firstPost', 'user']),

    (new Extend\ApiController(FlarumController\ListDiscussionsController::class))
        ->addInclude(['blogMeta', 'firstPost', 'user']),

    (new Extend\ApiController(FlarumController\ShowDiscussionController::class))
        ->addInclude(['blogMeta', 'firstPost', 'user']),

    (new Extend\ApiController(FlarumController\UpdateDiscussionController::class))
        ->addInclude(['blogMeta', 'firstPost', 'user']),

    (new Extend\ApiSerializer(BasicDiscussionSerializer::class))
        ->hasOne('blogMeta', BlogMetaSerializer::class),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(AttachForumSerializerAttributes::class),

    (new Extend\ApiSerializer(TagSerializer::class))
        ->attributes(AttatchTagSerializerAttributes::class),

    (new Extend\Filter(DiscussionFilterer::class))
        ->addFilterMutator(FilterDiscussionsForBlogPosts::class),

    (new Extend\SimpleFlarumSearch(DiscussionSearcher::class))
        ->addGambit(BlogArticleFilterGambit::class),
];

// Define events
$events = (new Extend\Event)
    ->listen(Saving::class, CreateBlogMetaOnDiscussionCreate::class);

// Extend Flarum SEO
if (class_exists("V17Development\FlarumSeo\Extend\SEO")) {
    $extend[] = (new \V17Development\FlarumSeo\Extend\SEO())
        ->addExtender("blog_category", SeoBlogOverviewMeta::class)
        ->addExtender("blog_article", SeoBlogArticleMeta::class);

    // Add Blog subscriber event
    $events->subscribe(SeoBlogSubscriber::class);
}

// Add events
$extend[] = $events;

return $extend;
