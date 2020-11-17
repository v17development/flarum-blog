<?php

namespace V17Development\FlarumBlog\Access;

use Flarum\Discussion\Discussion;
use Flarum\User\AbstractPolicy;
use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;

class DiscussionPolicy extends AbstractPolicy
{
    /**
     * {@inheritdoc}
     */
    protected $model = Discussion::class;

    /**
     * @param User $actor
     * @param Builder $query
     */
    public function find(User $actor, Builder $query)
    {
        // Hide blogposts which arent published or are still pending approval
        // Writers will have access to the posts if they are still pending for review
        if(!$actor->hasPermission('blog.canApprovePosts') && !$actor->hasPermission('blog.writeArticles')) {
            $query->whereNotIn('discussions.id', function ($query) {
                return $query
                    ->select('discussion_id')
                    ->from('blog_meta')
                    ->where('is_pending_review', 1);
            });
        }
    }
}