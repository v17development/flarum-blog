import DiscussionComposer from 'flarum/components/DiscussionComposer';

export default class BlogComposer extends DiscussionComposer {
  onsubmit() {
    this.loading = true;

    const data = this.data();

    app.store.createRecord('discussions').save(data).then(
        article => {
            app.composer.hide();
            m.route(app.route('blogArticle', { id: article.id() + '-' + article.slug() }));
        },
        this.loaded.bind(this)
    );
  }
}
