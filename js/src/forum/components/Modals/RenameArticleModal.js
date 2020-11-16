import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import ItemList from 'flarum/utils/ItemList';
import { slug } from 'flarum/utils/string';

export default class RenameArticleModal extends Modal {
  init() {
    super.init();

    this.article = this.props.article;

    this.name = m.prop(this.article.title() || '');
    this.slug = m.prop(this.article.slug() || '');

    this.redirect = this.props.redirect;
  }

  className() {
    return 'Modal--small Support-Modal';
  }

  title() {
    return app.translator.trans('v17development-flarum-blog.forum.tools.rename_article');
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="Form">
          {this.fields().toArray()}
        </div>
      </div>
    );
  }

  fields() {
    const items = new ItemList();

    items.add('name', (
      <div className="Form-group">
        <label>{app.translator.trans('v17development-flarum-blog.forum.article.title')}:</label>
        <input className="FormControl" placeholder={app.translator.trans('v17development-flarum-blog.forum.article.title')} value={this.name()} oninput={e => {
          this.name(e.target.value);
          this.slug(slug(e.target.value));
        }}/>
      </div>
    ), 50);

    items.add('slug', (
      <div className="Form-group">
        <label>{app.translator.trans('v17development-flarum-blog.forum.article.slug')}:</label>
        <input className="FormControl" placeholder={app.translator.trans('v17development-flarum-blog.forum.article.slug')} value={this.slug()} oninput={m.withAttr('value', this.slug)}/>
      </div>
    ), 40);

    items.add('submit', (
      <div className="Form-group">
        {Button.component({
          type: 'submit',
          className: 'Button Button--primary SupportModal-save',
          loading: this.loading,
          children: 'Update'
        })}
      </div>
    ), -10);

    return items;
  }

  submitData() {
    return {
      title: this.name(),
      slug: this.slug()
    };
  }

  onsubmit(e) {
    e.preventDefault();

    this.loading = true;

    this.article.save({
      title: this.name(),
      slug: this.slug()
    })
      .then(() => {
        this.hide();

        // Redirect
        if(this.redirect) {
          const url =  `/knowledgebase/${this.article.id()}-${this.slug()}`;

          m.route(url, true);
          window.history.replaceState(null, document.title, url);
        }
      }, response => {
        this.loading = false;
        this.handleErrors(response);
      }
    );
  }
}