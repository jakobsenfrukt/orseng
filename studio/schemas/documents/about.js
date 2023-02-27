export default {
  name: 'about',
  type: 'document',
  title: 'Om',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tittel',
    },
    {
      name: 'language',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'lead',
      title: 'Intro',
      type: 'text',
    },
    {
      name: 'studio',
      title: 'Om studioet',
      type: 'studio',
    },
    {
      name: 'services',
      title: 'Kompetanseområder',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'clients',
      title: 'Kunder',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'bio',
      title: 'Om meg',
      type: 'bio',
    },
  ],
}
