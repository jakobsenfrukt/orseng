export default {
  name: 'frontpage',
  type: 'document',
  title: 'Forside',
  fields: [
    {
      name: 'lead',
      title: 'Intro',
      type: 'text'
    },
    {
      name: 'hero',
      title: 'Forsidebilder',
      type: 'array',
      of: [{type: 'figure'}]
    }
  ]
}
