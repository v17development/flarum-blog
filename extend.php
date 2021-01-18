<?php

namespace V17Development\FlarumBlog;

// Laravel
use Illuminate\Events\Dispatcher;

// Flarum classes
use Flarum\Api\Controller as FlarumController;
use Flarum\Api\Serializer\BasicDiscussionSerializer;
use Flarum\Extend;
use Flarum\Discussion\Discussion;
use Flarum\Discussion\Event\Searching;

// Controllers
use V17Development\FlarumBlog\Controller\BlogOverviewController;
use V17Development\FlarumBlog\Controller\BlogItemController;
use V17Development\FlarumBlog\Controller\BlogComposerController;

// Extender
use V17Development\FlarumBlog\Extenders\ThemeExtender;

// Access
use V17Development\FlarumBlog\Access\ScopeDiscussionVisibility;
// API controllers
use V17Development\FlarumBlog\Api\Controller\CreateBlogMetaController;
use V17Development\FlarumBlog\Api\Controller\UpdateBlogMetaController;
use V17Development\FlarumBlog\Api\Serializer\BlogMetaSerializer;
// Listeners
use V17Development\FlarumBlog\Listeners\FilterBlogArticles;
use V17Development\FlarumBlog\Listeners\ForumAttributesListener;
use V17Development\FlarumBlog\Listeners\CreateBlogMetaOnDiscussionCreate;

// Models
use V17Development\FlarumBlog\BlogMeta\BlogMeta;

// Filters
use V17Development\FlarumBlog\Filter\FilterDiscussionsForBlogPosts;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__ . '/less/Forum.less')
        ->route('/blog', 'blog.overview', BlogOverviewController::class)
        ->route('/blog/compose', 'blog.compose', BlogComposerController::class)
        ->route('/blog/category/{category}', 'blog.category', BlogOverviewController::class)
        ->route('/blog/{id:[\d\S]+(?:-[^/]*)?}', 'blog.post', BlogItemController::class)
        // Shall we add RSS?
        // ->get('/blog/rss.xml', 'blog.rss.xml', RSS::class)
    ,
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__ . '/less/Admin.less'),

    (new Extend\Routes('api'))
        ->post('/blogMeta', 'blog.meta', CreateBlogMetaController::class)
        ->patch('/blogMeta/{id}', 'blog.meta.edit', UpdateBlogMetaController::class),

    new Extend\Locales(__DIR__ . '/locale'),

    // Add theme extender
    new ThemeExtender(),

    (new Extend\Model(Discussion::class))
        ->hasOne('blogMeta', BlogMeta::class, 'discussion_id'),

    (new Extend\ModelVisibility(Discussion::class))
        ->scope(ScopeDiscussionVisibility::class),

    (new Extend\ApiController(FlarumController\CreateDiscussionController::class))
        ->addInclude(['blogMeta', 'firstPost', 'user']),

    (new Extend\ApiController(FlarumController\ListDiscussionController::class))
        ->addInclude(['blogMeta', 'firstPost', 'user']),

    (new Extend\ApiController(FlarumController\ShowDiscussionController::class))
        ->addInclude(['blogMeta', 'firstPost', 'user']),

    (new Extend\ApiController(FlarumController\UpdateDiscussionController::class))
        ->addInclude(['blogMeta', 'firstPost', 'user']),

    (new Extend\ApiSerializer(BasicDiscussionSerializer::class))
        ->hasOne('blogMeta', BlogMetaSerializer::class),

    new Extend\Compat(function (Dispatcher $events) {
        $events->subscribe(ForumAttributesListener::class);
        $events->subscribe(CreateBlogMetaOnDiscussionCreate::class);

        $events->listen(Searching::class, FilterDiscussionsForBlogPosts::class);

        $events->subscribe(FilterBlogArticles::class);
    })
];
