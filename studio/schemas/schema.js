// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import siteSettings from './documents/siteSettings'
import category from './documents/category'
import project from './documents/project'
import about from './documents/about'

// Object types
import source from './objects/source'
import figure from './objects/figure'
import video from './objects/video'
import figureTwoColumn from './objects/figureTwoColumn'
import simplePortableText from './objects/simplePortableText'
import colorPalette from './objects/colorPalette'
import footer from './objects/footer'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    source,
    figure,
    video,
    figureTwoColumn,
    simplePortableText,
    colorPalette,
    footer,
    // The following are document types which will appear in the studio.
    siteSettings,
    category,
    project,
    about
  ]),
})
