import Modal from "flarum/components/Modal";
import Button from "flarum/components/Button";
import ItemList from "flarum/utils/ItemList";
import Stream from "flarum/utils/Stream";

export default class RenameArticleModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.article = this.attrs.article;

    this.name = Stream(this.article.title() || "");

    this.redirect = this.attrs.redirect;
  }

  className() {
    return "Modal--small Support-Modal";
  }

  title() {
    return app.translator.trans(
      "v17development-flarum-blog.forum.tools.rename_article"
    );
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
      "name",
      <div className="Form-group">
        <label>
          {app.translator.trans(
            "v17development-flarum-blog.forum.article.title"
          )}
          :
        </label>
        <input
          className="FormControl"
          placeholder={app.translator.trans(
            "v17development-flarum-blog.forum.article.title"
          )}
          bidi={this.name}
        />
      </div>,
      50
    );

    items.add(
      "submit",
      <div className="Form-group">
        {Button.component(
          {
            type: "submit",
            className: "Button Button--primary SupportModal-save",
            loading: this.loading,
          },
          "Update"
        )}
      </div>,
      -10
    );

    return items;
  }

  submitData() {
    return {
      title: this.name(),
    };
  }

  onsubmit(e) {
    e.preventDefault();

    this.loading = true;

    // Do not save
    if (this.attrs.onChange) {
      this.attrs.onChange(this.name());
      this.hide();

      return;
    }

    this.article
      .save({
        title: this.name(),
      })
      .then(
        () => {
          this.hide();

          // Redirect
          if (this.redirect) {
            const url = `/blog/${this.article.slug()}`;

            m.route.set(url, true);
            window.history.replaceState(null, document.title, url);
          }
        },
        (response) => {
          this.loading = false;
          this.handleErrors(response);
        }
      );
  }
}
