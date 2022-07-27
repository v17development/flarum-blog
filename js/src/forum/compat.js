import { compat } from '@flarum/core/forum';
import BlogMeta from '../common/Models/BlogMeta';
import ArticleSubscription from './components/ArticleSubscription';
import BlogCategories from './components/BlogCategories';
import BlogAuthor from './components/BlogItemSidebar/BlogAuthor';
import BlogItemSidebar from './components/BlogItemSidebar/BlogItemSidebar';
import BlogOverviewItem from './components/BlogOverviewItem';
import BlogPostController from './components/BlogPostController';
import Composer from './components/Composer/Composer';
import ComposerPreview from './components/Composer/ComposerPreview';
import FeaturedBlogItem from './components/FeaturedBlogItem';
import ForumNav from './components/ForumNav';
import Language from './components/LanguageDropdown/Language';
import LanguageDropdown from './components/LanguageDropdown/LanguageDropdown';
import BlogPostSettingsModal from './components/Modals/BlogPostSettingsModal';
import RenameArticleModal from './components/Modals/RenameArticleModal';
import BlogItem from './pages/BlogItem';
import BlogOverview from './pages/BlogOverview';

export default () => {
  Object.assign(compat, {
    'v17development/blog/components/BlogItemSidebar': BlogItemSidebar,
    'v17development/blog/components/BlogAuthor': BlogAuthor,

    'v17development/blog/components/Composer/Composer': Composer,
    'v17development/blog/components/Composer/ComposerPreview': ComposerPreview,

    'v17development/blog/components/LanguageDropdown/Language': Language,
    'v17development/blog/components/LanguageDropdown/LanguageDropdown': LanguageDropdown,

    'v17development/blog/components/Modals/BlogPostSettingsModal': BlogPostSettingsModal,
    'v17development/blog/components/Modals/RenameArticleModal': RenameArticleModal,

    'v17development/blog/components/ArticleSubscription': ArticleSubscription,
    'v17development/blog/components/BlogCategories': BlogCategories,
    'v17development/blog/components/BlogOverviewItem': BlogOverviewItem,
    'v17development/blog/components/BlogPostController': BlogPostController,
    'v17development/blog/components/FeaturedBlogItem': FeaturedBlogItem,
    'v17development/blog/components/ForumNav': ForumNav,

    'v17development/blog/pages/BlogItem': BlogItem,
    'v17development/blog/pages/BlogOverview': BlogOverview,

    'v17development/blog/models/BlogMeta': BlogMeta,
  });
};
