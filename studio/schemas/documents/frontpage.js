export default {
  name: 'frontpage',
  type: 'document',
  title: 'Forside',
  fields: [
    {
      name: 'lead',
      title: 'Intro',
      type: 'localeText'
    },
    {
      name: 'hero',
      title: 'Forsidebilder',
      type: 'array',
      of: [{type: 'localeFigure'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: 'Forside',
      }
    }
  }
}
