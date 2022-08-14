import ModalManager from 'flarum/forum/components/ModalManager';
import { override } from 'flarum/common/extend';
import OverrideModalState from '../states/OverrideModalState';
import app from 'flarum/forum/app';

/**
 * Notice from V17: Temporary override due to lack of multi-dialogs!
 *
 * We'll open a PR to support multi-dialog to the Flarum main repo
 */

export default function overrideModalManager() {
  if (!$.fn.modal) {
    // Bootstrap modals not defined, so we can assume this is Flarum 1.5 or later,
    // where modal stacking is available natively.
    //
    // In this case, we do not need to override any modal code for the extension.

    return;
  }

  const style = document.createElement('style');
  style.innerHTML = `
#modal .ModalManager:not(:last-child),
.modal-backdrop.in:not(:last-child) {
  opacity: 0;
}`;
  document.head.appendChild(style);

  app.modal = new OverrideModalState();

  override(ModalManager.prototype, 'view', function () {
    return this.attrs.state.modalList.map((modal) => {
      const Tag = modal?.componentClass;

      return (
        <div className="ModalManager modal fade" modal-key={modal.key}>
          {!!Tag && (
            <Tag
              key={modal?.key}
              {...modal.attrs}
              animateShow={this.animateShow.bind(this)}
              animateHide={this.animateHide.bind(this)}
              state={this.attrs.state}
            />
          )}
        </div>
      );
    });
  });

  override(ModalManager.prototype, 'animateHide', function () {
    if (this.attrs.state.modalList.length === 1) {
      this.modalShown = false;
    }
  });

  override(ModalManager.prototype, 'animateShow', function (readyCallback = () => {}) {
    if (!this.attrs.state.modal) return;

    const dismissible = !!this.attrs.state.modal.componentClass.isDismissible;

    this.modalShown = true;

    // If we are opening this modal while another modal is already open,
    // the shown event will not run, because the modal is already open.
    // So, we need to manually trigger the readyCallback.
    if ($(`.modal[modal-key=${this.attrs.state.modal.key}]`).hasClass('in')) {
      readyCallback();
      return;
    }

    setTimeout(() => {
      $(`.modal[modal-key=${this.attrs.state.modal.key}]`)
        .one('shown.bs.modal', readyCallback)
        // @ts-expect-error: No typings available for Bootstrap modals.
        .modal({
          backdrop: dismissible || 'static',
          keyboard: dismissible,
          show: true,
        });
    }, 1);
  });
}
