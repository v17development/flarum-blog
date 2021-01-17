import ComposerBody from 'flarum/components/ComposerBody';
import Button from 'flarum/components/Button';

export default class Composer extends ComposerBody {
  init() {
    super.init();

    this.previewContent = false;
  }

  // Render
  render() {
    const hasContent = (this.content() && this.content() !== "");

    return (
      <div className={"Flarum-Blog-Composer"}>
        <div className={"Flarum-Blog-Composer-tabs"}>
          <Button className={!this.previewContent && "AricleComposerButtonSelected"} onclick={() => this.previewContent = false}>{app.translator.trans('v17development-flarum-blog.forum.composer.write')}</Button>
          <Button className={this.previewContent && "AricleComposerButtonSelected"} onclick={() => this.previewContent = true}>{app.translator.trans('v17development-flarum-blog.forum.composer.view')}</Button>
        </div>
        
        <div className={"Composer Flarum-Blog-Composer-body"}>
          {this.previewContent ? (
            <div className={"Flarum-Blog-Composer-preview"} config={hasContent && this.configPreview.bind(this)}>
              {!hasContent && (
                app.translator.trans('v17development-flarum-blog.forum.composer.nothing_to_preview')
              )}
            </div>
          ) : this.view()}
        </div>
      </div>
    )
  }

  // Initialize preview content
  configPreview(element) {
    s9e.TextFormatter.preview(this.content() || '', element);
  }

  // Submit trigger
  onsubmit() {
    if(this.props.onsubmit) {
      this.props.onsubmit();
    }
  }
}