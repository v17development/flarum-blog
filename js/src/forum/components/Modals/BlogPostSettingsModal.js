import app from 'flarum/forum/app';
import Modal from 'flarum/common/components/Modal';
import Button from 'flarum/common/components/Button';
import ItemList from 'flarum/common/utils/ItemList';
import Stream from 'flarum/common/utils/Stream';
import Switch from 'flarum/common/components/Switch';
import selectFiles from '../../utils/selectFiles';

export default class BlogPostSettingsModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    if (this.attrs.article) {
      this.meta = this.attrs.article && this.attrs.article.blogMeta() ? this.attrs.article.blogMeta() : app.store.createRecord('blogMeta');
    } else {
      this.meta = this.attrs.meta ? this.attrs.meta : app.store.createRecord('blogMeta');
    }

    this.isNew = !this.meta.exists;

    this.summary = Stream(this.meta.summary() || '');

    this.featuredImage = Stream(this.meta.featuredImage() || '');

    this.isFeatured = Stream(this.meta.isFeatured() || false);
    this.isSized = Stream(this.meta.isSized() || false);
    this.isPendingReview = Stream(this.meta.isPendingReview() || false);
  }

  className() {
    return 'Modal--small Support-Modal';
  }

  title() {
    return app.translator.trans('v17development-flarum-blog.forum.article_settings.title');
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="Form">{this.fields().toArray()}</div>
      </div>
    );
  }

  fields() {
    const items = new ItemList();

    items.add(
      'summary',
      <div className="Form-group">
        <label>{app.translator.trans('v17development-flarum-blog.forum.article_settings.fields.summary.title')}:</label>
        <textarea
          className="FormControl"
          style={{
            maxWidth: '100%',
            minWidth: '100%',
            width: '100%',
            minHeight: '120px',
          }}
          bidi={this.summary}
          placeholder={app.translator.trans('v17development-flarum-blog.forum.article_settings.fields.summary.placeholder')}
        />

        <small>{app.translator.trans('v17development-flarum-blog.forum.article_settings.fields.summary.helper_text')}</small>
      </div>,
      30
    );

    let fofUploadButton = null;

    if ('fof-upload' in flarum.extensions && app.forum.attribute('fof-upload.canUpload')) {
      const {
        components: { Uploader, FileManagerModal },
      } = require('@fof-upload');

      const uploader = new Uploader();

      fofUploadButton = (
        <Button
          class="Button Button--icon"
          onclick={async () => {
            app.modal.show(
              FileManagerModal,
              {
                uploader: uploader,
                onSelect: (files) => {
                  const file = app.store.getById('files', files[0]);

                  this.featuredImage(file.url());
                },
              },
              true
            );
          }}
          icon="fas fa-cloud-upload-alt"
        />
      );
    }

    items.add(
      'image',
      <div className="Form-group V17Blog-ArticleImage">
        <label>{app.translator.trans('v17development-flarum-blog.forum.article_settings.fields.image.title')}:</label>
        <div data-upload-enabled={!!fofUploadButton}>
          <input type="text" className="FormControl" bidi={this.featuredImage} placeholder="https://" />
          {fofUploadButton}
        </div>

        <small>{app.translator.trans('v17development-flarum-blog.forum.article_settings.fields.image.helper_text')}</small>

        {this.featuredImage() !== '' && (
          <img
            src={this.featuredImage()}
            alt="Article image"
            title={app.translator.trans('v17development-flarum-blog.forum.article_settings.fields.image.title')}
            style={{ width: '100%', marginTop: '15px' }}
          />
        )}
      </div>,
      30
    );

    items.add(
      'sized',
      <div className="Form-group">
        {Switch.component(
          {
            state: this.isSized() == true,
            onchange: (val) => {
              this.isSized(val);
            },
          },
          [
            <b>{app.translator.trans('v17development-flarum-blog.forum.article_settings.fields.highlight.title')}</b>,
            <div className="helpText" style={{ fontWeight: 500 }}>
              {app.translator.trans('v17development-flarum-blog.forum.article_settings.fields.highlight.helper_text')}
            </div>,
          ]
        )}
      </div>,
      -10
    );

    items.add(
      'submit',
      <div className="Form-group">
        {Button.component(
          {
            type: 'submit',
            className: 'Button Button--primary SupportModal-save',
            loading: this.loading,
          },
          app.translator.trans('core.forum.composer_edit.submit_button')
        )}
      </div>,
      -10
    );

    return items;
  }

  submitData() {
    return {
      summary: this.summary(),
      featuredImage: this.featuredImage(),
      isFeatured: this.isFeatured(),
      isSized: this.isSized(),
      isPendingReview: this.isPendingReview(),
      relationships:
        this.isNew && !this.attrs.isComposer
          ? {
              discussion: this.attrs.article,
            }
          : null,
    };
  }

  onsubmit(e) {
    e.preventDefault();

    // Submit data
    if (this.attrs.onsubmit) {
      // Update attributes
      this.meta.pushData({
        attributes: this.submitData(),
      });

      // Push
      this.attrs.onsubmit(this.meta);

      this.hide();
      return;
    }

    this.loading = true;

    this.meta.save(this.submitData()).then(
      () => {
        if (this.attrs.article) {
          this.attrs.article.pushData({
            relationships: {
              blogMeta: this.meta,
            },
          });
        }

        this.hide();
        m.redraw();
      },
      (response) => {
        this.loading = false;
        this.handleErrors(response);
      }
    );
  }
}
