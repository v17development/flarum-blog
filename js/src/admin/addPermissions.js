import ItemList from 'flarum/utils/ItemList';

export default function blogPermissions() {
  const items = new ItemList();

  items.add('writeArticles', {
    icon: 'fas fa-pencil-alt',
    label: "Write and edit blog articles",
    permission: 'blog.writeArticles',
  }, 100);

  items.add('autoApprovePosts', {
    icon: 'far fa-star',
    label: "Auto approve articles",
    permission: 'blog.autoApprovePosts'
  }, 90);

  items.add('approvePreview', {
    icon: 'far fa-thumbs-up',
    label: "Can approve blog articles",
    permission: 'blog.canApprovePosts'
  }, 90);
  
  return items;
}
