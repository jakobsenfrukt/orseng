export default {
  name: 'studio',
  type: 'object',
  title: 'Studio',
  fields: [
    {
      name: 'title',
      title: 'Overskrift',
      type: 'string'
    },
    {
      name: 'localeText',
      title: 'Tekst',
      type: 'simplePortableText'
    },
    {
      name: 'mainImage',
      title: 'Studiobilde',
      type: 'figure'
    }
  ]
}
