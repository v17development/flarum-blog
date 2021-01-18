import Component from "flarum/Component";

export default class ComposerPreview extends Component {
  view() {
    return <div />;
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    s9e.TextFormatter.preview(vnode.attrs.content || "", vnode.dom);
  }
}
