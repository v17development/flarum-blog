<?php

namespace V17Development\FlarumBlog\Extenders;

use Flarum\Frontend\Assets;
use Flarum\Extend\ExtenderInterface;
use Illuminate\Contracts\Container\Container;
use Flarum\Extension\Extension;
use Flarum\Frontend\Compiler\Source\SourceCollector;
use Flarum\Settings\SettingsRepositoryInterface;

class ThemeExtender implements ExtenderInterface
{
    public function extend(Container $container, Extension $extension = null)
    {
        $container->resolving(
            'flarum.assets.forum',
            function (Assets $assets) {
                $assets->css(function (SourceCollector $sources) {
                    $settings = app(SettingsRepositoryInterface::class);

                    // Hide tags from home page
                    $sources->addString(function () use ($settings) {
                        $string = '';

                        if ($settings->get('blog_hide_tags', true)) {
                            $blogTags = explode("|", $settings->get('blog_tags', ''));

                            foreach ($blogTags as $tagId) {
                                $string .= '.IndexPage .item-nav .item-tag' . $tagId . ' { display: none; }';
                            }
                        }

                        return $string;
                    });
                });
            }
        );
    }
}
