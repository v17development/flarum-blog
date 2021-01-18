import Model from "flarum/Model";
import mixin from "flarum/utils/mixin";

export default class BlogMeta extends mixin(Model, {
  discussion: Model.hasOne("discussion"),
  featuredImage: Model.attribute("featuredImage"),
  summary: Model.attribute("summary"),
  isFeatured: Model.attribute("isFeatured"),
  isSized: Model.attribute("isSized"),
  isPendingReview: Model.attribute("isPendingReview"),
}) {}
