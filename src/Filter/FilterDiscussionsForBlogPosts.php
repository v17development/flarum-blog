<?php

namespace V17Development\FlarumBlog\Filter;

use Flarum\Discussion\Event\Searching;
use Flarum\Settings\SettingsRepositoryInterface;
use V17Development\FlarumBlog\Gambit\BlogGambit;
use Flarum\Discussion\Search\Gambit\FulltextGambit;

class FilterDiscussionsForBlogPosts
{
    /**
     * FilterDiscussionsForBlogPosts constructor.
     *
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        // Get forum settings
        $this->settings = $settings;
	}
	
	/**
	 * @param Searching $event
	 */
	public function handle(Searching $event)
	{
		// Do we need to filter?
		if(filter_var($this->settings->get('blog_filter_discussion_list'), FILTER_VALIDATE_BOOLEAN) === false) {
			return;
		}

		$search = $event->search;
		$activeGambits = $search->getActiveGambits();
		$hideBlogPosts = true;

		// Loop through the active gambits
		foreach ($activeGambits as $gambit) {
			if(get_class($gambit) === BlogGambit::class) {
				$hideBlogPosts = false;
			}
			if(get_class($gambit) === FulltextGambit::class) {
				$hideBlogPosts = false;
			}
		}

		// Filter discussions from discussion list
		if($hideBlogPosts) {
			$tagsArray = explode("|", $this->settings->get('blog_tags', ''));

			$search
				->getQuery()
				->where(function ($query) use ($tagsArray) {
					foreach ($tagsArray as $tagId) {
						$query->whereNotIn('discussions.id', function ($query) use ($tagId) {
							$query->select('discussion_id')
								->from('discussion_tag')
								->where('tag_id', $tagId);
						});
					}
				});
		}
	}
}