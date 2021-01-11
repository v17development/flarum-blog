import ComposerBody from 'flarum/components/ComposerBody';
import Button from 'flarum/components/Button';
import {extend} from 'flarum/extend';

export default class ArticleComposer extends ComposerBody {
  init() {
    super.init();

    this.previewContent = false;
  }

  // Render
  render() {
    const hasContent = (this.content() && this.content() !== "");

    return (
      <div className={"Flarum-Support-ArticleComposer"}>
        <div className={"Flarum-Support-ArticleComposer-tabs"}>
          <Button className={!this.previewContent && "AricleComposerButtonSelected"} onclick={() => this.previewContent = false}>{app.translator.trans('v17development-flarum-support.forum.composer.write')}</Button>
          <Button className={this.previewContent && "AricleComposerButtonSelected"} onclick={() => this.previewContent = true}>{app.translator.trans('v17development-flarum-support.forum.composer.view')}</Button>
        </div>
        
        <div className={"Composer Flarum-Support-ComposeArticle-body"}>
          {this.previewContent ? (
            <div className={"Flarum-Support-ArticleComposer-preview"} config={hasContent && this.configPreview.bind(this)}>
              {!hasContent && (
                app.translator.trans('v17development-flarum-support.forum.composer.nothing_to_preview')
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