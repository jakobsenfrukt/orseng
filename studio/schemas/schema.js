// Document types
import siteSettings from './documents/siteSettings'
import category from './documents/category'
import project from './documents/project'
import about from './documents/about'
import frontpage from './documents/frontpage'
import contact from './documents/contact'

// Object types
import localeString from './objects/localeString'
import localeSimplePortableText from './objects/localeSimplePortableText'
import localeText from './objects/localeText'
import localeFigure from './objects/localeFigure'
import source from './objects/source'
import figure from './objects/figure'
import figureTwoColumn from './objects/figureTwoColumn'
import figureThreeColumn from './objects/figureThreeColumn'
import simplePortableText from './objects/simplePortableText'
import colorSet from './objects/colorSet'
import themePalette from './objects/themePalette'
import bio from './objects/bio'
import studio from './objects/studio'
import projectDetails from './objects/projectDetails'

export default [
  /* objects */
  localeString,
  localeSimplePortableText,
  localeText,
  localeFigure,
  source,
  figure,
  figureTwoColumn,
  figureThreeColumn,
  simplePortableText,
  colorSet,
  themePalette,
  bio,
  studio,
  projectDetails,
  /* document types */
  siteSettings,
  category,
  project,
  about,
  frontpage,
  contact,
]
