import { extend } from 'flarum/extend';
import TagsPage from 'flarum/tags/components/TagsPage';

export default function extendTagOverview() {
    extend(TagsPage.prototype, 'view', function(markup) {
        if(app.forum.attribute('blogHideTags') == false) return markup;
        
        // Get knowledge base tag ID's
        const knowledgeBaseTags = app.forum.attribute('blogTags') || [];

        // Get tiles
        let tag_tiles = markup.children[1].children[1].children[0].children;

        // Map through the tiles and remove tiles that are part of the knowledge base 
        markup.children[1].children[1].children[0].children = tag_tiles.map((tile, i) => {
            return knowledgeBaseTags.indexOf(this.tags[i].id()) >= 0 ? null : tile;
        });

        return markup;
    });
}
