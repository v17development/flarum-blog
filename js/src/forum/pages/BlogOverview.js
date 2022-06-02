import app from 'flarum/forum/app';

import IndexPage from 'flarum/components/IndexPage';
import Page from 'flarum/common/components/Page';
import Button from 'flarum/common/components/Button';
import BlogCategories from '../components/BlogCategories';
import Link from 'flarum/common/components/Link';
import LanguageDropdown from '../components/LanguageDropdown/LanguageDropdown';
import ForumNav from '../components/ForumNav';
import BlogOverviewItem from '../components/BlogOverviewItem';
import FeaturedBlogItem from '../components/FeaturedBlogItem';

export default class BlogOverview extends Page {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle(app.translator.trans('v17development-flarum-blog.forum.blog'));

    this.bodyClass = 'BlogOverviewPage';

    this.isLoading = true;
    this.featuredPosts = [];
    this.posts = [];
    this.hasMore = null;
    this.isLoadingMore = false;

    this.languages = app.store.all('discussion-languages');

    this.currentSelectedLanguage = m.route.param('lang') ? m.route.param('lang') : app.translator.formatter.locale;

    // Send history push
    app.history.push('blog');

    this.loadBlogOverview();

    this.featuredCount = parseInt(app.forum.attribute('blogFeaturedCount'));

    this.showCategories = true;
    this.showForumNav = true;
  }

  // Load blog overview
  loadBlogOverview() {
    const preloadBlogOverview = app.preloadedApiDocument();

    if (preloadBlogOverview) {
      // We must wrap this in a setTimeout because if we are mounting this
      // component for the first time on page load, then any calls to m.redraw
      // will be ineffective and thus any configs (scroll code) will be run
      // before stuff is drawn to the page.
      setTimeout(this.show.bind(this, preloadBlogOverview), 0);
    } else {
      this.reloadData();
    }

    m.redraw();
  }

  reloadData() {
    let q = `is:blog${m.route.param('slug') ? ` tag:${m.route.param('slug')}` : ''}`;

    if (this.languages !== null && this.languages.length >= 1) {
      q += ` language:${this.currentSelectedLanguage}`;
    }

    app.store
      .find('discussions', {
        filter: {
          q,
        },
        sort: '-createdAt',
      })
      .then(this.show.bind(this))
      .catch(() => {
        m.redraw();
      });
  }

  // Show blog posts
  show(articles) {
    if (articles.length === 0) {
      this.isLoading = false;
      m.redraw();

      return;
    }

    // Set pagination
    this.hasMore = articles.payload.links && articles.payload.links.next ? articles.payload.links.next : null;

    this.featuredPosts = articles.slice(0, this.featuredCount);
    this.posts = articles.length > this.featuredCount ? articles.slice(this.featuredCount, articles.length) : [];

    this.isLoading = false;

    m.redraw();
  }

  // Load more blog posts
  loadMore() {
    this.isLoadingMore = true;

    app.store
      .find(this.hasMore.replace(app.forum.attribute('apiUrl'), ''))
      .then((data) => {
        data.map((article) => this.posts.push(article));

        // Update hasmore button
        this.hasMore = data.payload.links && data.payload.links.next ? data.payload.links.next : null;
      })
      .catch(() => {})
      .then(() => {
        this.isLoadingMore = false;
        m.redraw();
      });
  }

  title() {
    if (!m.route.param('slug')) {
      return <h2>{app.translator.trans('v17development-flarum-blog.forum.recent_posts')}</h2>;
    }

    const tag = app.store.all('tags').filter((tag) => tag.slug() === m.route.param('slug'));

    return (
      <h2>
        {tag && tag[0] && tag[0].name()}
        <small>
          {' '}
          - <Link href={app.route('blog')}>{app.translator.trans('v17development-flarum-blog.forum.return_to_overview')}</Link>
        </small>
      </h2>
    );
  }

  view() {
    const defaultImage = app.forum.attribute('blogDefaultImage')
      ? `url(${app.forum.attribute('baseUrl') + '/assets/' + app.forum.attribute('blogDefaultImage')})`
      : null;

    return [
      app.forum.attribute('blogAddHero') == true && IndexPage.prototype.hero(),
      <div className={'FlarumBlogOverview'}>
        <div className={'container'}>
          <div className={'BlogFeatured'}>
            <div className={'BlogOverviewButtons'}>
              {app.forum.attribute('canWriteBlogPosts') && (
                <Button className={'Button'} onclick={() => this.newArticle()} icon={'fas fa-pencil-alt'}>
                  {app.translator.trans('v17development-flarum-blog.forum.compose.write_article')}
                </Button>
              )}

              {this.languages !== null && this.languages.length >= 1 && (
                <LanguageDropdown
                  selected={this.currentSelectedLanguage}
                  onclick={(language) => {
                    this.currentSelectedLanguage = language;

                    m.route.set(document.location.pathname, {
                      lang: language,
                    });

                    this.reloadData();
                  }}
                />
              )}
            </div>

            {this.title()}

            <div style={{ clear: 'both' }} />

            <div class="BlogFeatured-list">
              {/* Ghost data */}
              {this.isLoading &&
                [...new Array(this.featuredCount).fill(undefined)].map(() => (
                  <div class="BlogFeatured-list-item BlogFeatured-list-item-ghost">
                    <div class="BlogFeatured-list-item-details">
                      <h4>&nbsp;</h4>

                      <div class="data">
                        <span>
                          <i class="far fa-wave" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

              {!this.isLoading &&
                this.featuredPosts.length >= 0 &&
                this.featuredPosts.map((article) => <FeaturedBlogItem article={article} defaultImage={defaultImage} />)}
            </div>
          </div>

          <div className={'BlogScrubber'}>
            <div className={'BlogList'}>
              {this.isLoading &&
                [false, false, true, false].map((state) => {
                  return (
                    <div className={`BlogList-item BlogList-item-${state === true ? 'sized' : 'default'} BlogList-item-ghost`}>
                      <div className={'BlogList-item-photo FlarumBlog-default-image'}></div>
                      <div className={'BlogList-item-content'}>
                        <h4>&nbsp;</h4>
                        <p>&nbsp;</p>

                        <div className={'data'}>
                          <span>
                            <i className={'far fa-wave'} />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {!this.isLoading &&
                this.posts.length >= 1 &&
                this.posts.map((article) => <BlogOverviewItem article={article} defaultImage={defaultImage} />)}

              {!this.isLoading && this.featuredPosts.length > 0 && this.hasMore === null && (
                <p className={'FlarumBlog-reached-end'}>{app.translator.trans('v17development-flarum-blog.forum.no_more_posts')}</p>
              )}

              {!this.isLoading && this.featuredPosts.length === 0 && this.posts.length === 0 && (
                <p className={'FlarumBlog-reached-end'}>{app.translator.trans('v17development-flarum-blog.forum.category_empty')}</p>
              )}

              {!this.isLoading && this.hasMore !== null && (
                <div className={'FlarumBlog-reached-load-more'}>
                  <Button className={'Button'} onclick={() => this.loadMore()} icon={'fas fa-chevron-down'} loading={this.isLoadingMore}>
                    {app.translator.trans('core.forum.discussion_list.load_more_button')}
                  </Button>
                </div>
              )}
            </div>

            <div className={'Sidebar'}>
              {this.showCategories && <BlogCategories />}
              {this.showForumNav && <ForumNav />}
            </div>
          </div>
        </div>
      </div>,
    ];
  }

  newArticle() {
    let tags = [];

    // Get current category
    const currentCategory = app.store.getBy('tags', 'slug', m.route.param('slug'));

    if (currentCategory) {
      tags.push(currentCategory);
    }

    // Redirect to the composer
    m.route.set(
      app.route('blogComposer', {
        tags: tags.map((tag) => tag.id()).join(),
        lang: this.languages.length > 0 ? this.currentSelectedLanguage : undefined,
      })
    );
  }
}
