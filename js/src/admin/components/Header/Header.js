import Component from 'flarum/Component';

export default class Header extends Component {
  view() {
    return (
      <div>
        <div className="FlarumBlog-header">
          <div className="header-container">
            <h2>Flarum Blog</h2>

            <p>Adds a blog to your forum</p>

            <div className="clear"/>
          </div>
        </div>
        <div className="container">
          <p>Welcome to the Flarum Blog settings. If you have found a bug, have feedback or an idea, join the <a href="https://join.slack.com/t/v17dev/shared_invite/zt-g6ky1fd3-RreB9UB~636jL~QjDGfZHg">V17 Development Slack workspace</a>. Also, for tips &amp; tricks, check our <a href="https://community.v17.dev/knowledgebase/category/flarum-blog" target={"_blank"}>knowledge base</a>. Do you want to contribute? Check the <a href="https://github.com/v17development/flarum-blog">GitHub repository</a></p>

          <h2 style={{ marginTop: '25px' }}>Blog settings</h2>
        </div>
      </div>
    )
  }
}