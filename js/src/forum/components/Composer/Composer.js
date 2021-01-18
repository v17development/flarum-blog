import ComposerBody from "flarum/components/ComposerBody";
import Button from "flarum/components/Button";
import TextEditor from "flarum/components/TextEditor";
import ComposerPreview from "./ComposerPreview";

export default class Composer extends ComposerBody {
  oninit(vnode) {
    super.oninit(vnode);

    this.previewContent = false;
  }

  // Render
  view() {
    const hasContent =
      this.composer.fields.content() && this.composer.fields.content() !== "";
    const loading = this.loading || this.attrs.disabled;

    return (
      <div
        className={`Flarum-Blog-Composer ${
          loading ? "Flarum-Blog-Composer-Loading" : ""
        }`}
      >
        <div className={"Flarum-Blog-Composer-tabs"}>
          <Button
            className={!this.previewContent && "AricleComposerButtonSelected"}
            onclick={() => (this.previewContent = false)}
          >
            {app.translator.trans(
              "v17development-flarum-blog.forum.composer.write"
            )}
          </Button>
          <Button
            className={this.previewContent && "AricleComposerButtonSelected"}
            onclick={() => (this.previewContent = true)}
          >
            {app.translator.trans(
              "v17development-flarum-blog.forum.composer.view"
            )}
          </Button>
        </div>

        <div
          className={`Composer Flarum-Blog-Composer-body ${
            this.previewContent ? "Flarum-Blog-Composer-HideEditor" : ""
          }`}
        >
          {this.previewContent && (
            <div className={"Flarum-Blog-Composer-preview"}>
              {!hasContent &&
                app.translator.trans(
                  "v17development-flarum-blog.forum.composer.nothing_to_preview"
                )}

              <ComposerPreview content={this.composer.fields.content()} />
            </div>
          )}

          {TextEditor.component({
            submitLabel:
              this.attrs.submitLabel ||
              app.translator.trans("core.forum.composer_edit.submit_button"),
            placeholder: this.attrs.placeholder,
            disabled: loading,
            composer: this.composer,
            preview: this.jumpToPreview && this.jumpToPreview.bind(this),
            onchange: this.composer.fields.content,
            onsubmit: this.onsubmit.bind(this),
            value: this.composer.fields.content(),
          })}
        </div>
      </div>
    );
  }

  // Submit trigger
  onsubmit() {
    if (this.attrs.onsubmit) {
      this.attrs.onsubmit();
    }
  }
}
