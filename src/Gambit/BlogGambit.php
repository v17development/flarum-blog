<?php

namespace V17Development\FlarumBlog\Gambit;

use Flarum\Search\AbstractRegexGambit;
use Flarum\Search\AbstractSearch;
use Flarum\Settings\SettingsRepositoryInterface;

class BlogGambit extends AbstractRegexGambit
{
    /**
     * @var string
     */
    protected $pattern = 'is:blog';

    /**
     * BlogGambit constructor.
     *
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        // Get Flarum settings
        $this->settings = $settings;
    }

    /**
     * @param AbstractSearch $search
     * @param array          $matches
     * @param $negate
     */
    protected function conditions(AbstractSearch $search, array $matches, $negate)
    {
        $tagsArray = explode("|", $this->settings->get('blog_tags', ''));

        $search->getQuery()->where(function ($query) use ($tagsArray, $negate) {
            foreach ($tagsArray as $tagId) {
                $query->orWhereIn('discussions.id', function ($query) use ($tagId) {
                    $query->select('discussion_id')
                        ->from('discussion_tag')
                        ->where('tag_id', $tagId);
                }, $negate);
            }
        });
    }
}
