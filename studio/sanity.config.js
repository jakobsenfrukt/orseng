import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'
import { documentInternationalization } from '@sanity/document-internationalization'

import schemas from './schemas/schema'
import deskStructure from './deskStructure'
import { supportedLanguages } from './schemas/languages'
import { Logo } from './plugins/orseng/Logo'

export default defineConfig({
  title: 'orseng',
  projectId: 'eparymf1',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
    colorInput(),
    documentInternationalization({
      supportedLanguages,
      schemaTypes: ['about'],
    }),
  ],
  schema: {
    types: schemas,
  },
  studio: {
    components: {
      logo: Logo,
    },
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) =>
          ['project', 'category'].includes(templateItem.templateId)
        )
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (
        ['siteSettings', 'about', 'frontpage', 'contact'].includes(schemaType)
      ) {
        return prev.filter(
          ({ action }) => !['unpublish', 'delete', 'duplicate'].includes(action)
        )
      }
      return prev
    },
  },
})
