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
      name: 'lead',
      title: 'Intro',
      type: 'text'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'bio'
    },
    {
      name: 'clients',
      title: 'Kunder',
      type: 'simplePortableText'
    },
    {
      name: 'cv',
      title: 'CV',
      type: 'file'
    }
  ]
}
