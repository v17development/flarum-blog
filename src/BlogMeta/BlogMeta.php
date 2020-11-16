<?php

namespace V17Development\FlarumBlog\BlogMeta;

use Flarum\Database\AbstractModel;
use Flarum\Database\ScopeVisibilityTrait;
use Flarum\Discussion\Discussion;

class BlogMeta extends AbstractModel
{
    use ScopeVisibilityTrait;

    protected $table = 'blog_meta';

    /**
     * Guard discussion
     */
    protected $guarded = [
        'discussion_id'
    ];
    
    public static function build($discussionId, $featuredImage, $summary, $isFeatured, $isSized, $isPendingReview)
    {
        $blogMeta = new static();
        $blogMeta->discussion_id = $discussionId;
        $blogMeta->featured_image = $featuredImage;
        $blogMeta->summary = $summary;
        $blogMeta->is_featured = $isFeatured;
        $blogMeta->is_sized = $isSized;
        $blogMeta->is_pending_review = $isPendingReview;

        return $blogMeta;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function discussion()
    {
        return $this->belongsTo(Discussion::class);
    }
}
