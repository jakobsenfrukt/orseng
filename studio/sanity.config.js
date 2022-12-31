import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'

import schemas from './schemas/schema'
import deskStructure from './deskStructure'
import { Logo } from './plugins/orseng/Logo'

export default defineConfig({
  title: 'orseng',
  projectId: 'eparymf1',
  dataset: 'staging',
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
    colorInput(),
  ],
  schema: {
    types: schemas,
  },
  studio: {
    components: {
      logo: Logo,
    },
  },
})
