export default {
  name: 'bio',
  type: 'object',
  title: 'Bio',
  fields: [
    {
      name: 'title',
      title: 'Overskrift',
      type: 'string'
    },
    {
      name: 'text',
      title: 'Tekst',
      type: 'simplePortableText'
    },
    {
      name: 'mainImage',
      title: 'Portrettbilde',
      type: 'figure'
    }
  ]
}
