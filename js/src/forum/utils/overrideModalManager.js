import ModalManager from "flarum/forum/components/ModalManager";
import { extend, override } from "flarum/common/extend";

export default function overrideModalManager() {
  override(ModalManager.prototype, "view", function () {
    return this.attrs.state.modalList.map((modal) => {
      const Tag = modal?.componentClass;

      return (
        <div className="ModalManager modal fade">
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

  override(ModalManager.prototype, "animateHide", function () {
    if (this.attrs.state.modalList.length === 1) {
      this.modalShown = false;
    }
  });
}
