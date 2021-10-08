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
      name: 'services',
      title: 'Kompetanseområder',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'clients',
      title: 'Kunder',
      type: 'array',
      of: [{type: 'string'}]
    }
  ]
}
