import Component from 'flarum/Component';
import Button from 'flarum/components/Button';

export default class MenuContainer extends Component {
  view() {
    return (
      <div className={"container FlarumBlog-Tabs"}>
        <Button className={`Button ${this.selectedClass('settings')}`} onclick={() => m.route(`/blog`)}><i className={"fas fa-tools"} /> Settings</Button>
        <Button className={`Button ${this.selectedClass('categories')}`} onclick={() => m.route(`/blog/categories`)}><i className={"fas fa-tags"} /> Categories</Button>
      </div>
    )
  }

  selectedClass(item) {
    return this.props.selected === item ? 'Button--primary' : '';
  }
}