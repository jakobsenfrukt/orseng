export default {
  name: 'about',
  type: 'document',
  title: 'Om',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tittel'
    },
    {
      name: 'excerpt',
      title: 'Ingress',
      type: 'text'
    },
    {
      name: 'body',
      title: 'Bio',
      type: 'simplePortableText'
    },
    {
      name: 'clients',
      title: 'Kunder',
      type: 'simplePortableText'
    },
    {
      name: 'mainImage',
      title: 'Portrett',
      type: 'figure'
    },
    {
      name: 'cv',
      title: 'CV',
      type: 'file'
    }
  ]
}
