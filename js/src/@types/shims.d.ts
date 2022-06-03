import BlogMeta from '../common/Models/BlogMeta';

declare module 'flarum/common/models/Discussion' {
  export default interface Discussion {
    blogMeta: () => false | BlogMeta;
  }
}

declare module 'flarum/tags/common/models/Tag' {
  export default interface Discussion {
    isBlog: () => boolean;
  }
}
