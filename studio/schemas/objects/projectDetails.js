export default {
  name: 'projectDetails',
  type: 'object',
  title: 'Prosjektdetaljer',
  fields: [
    {
      name: 'client',
      title: 'Kunde',
      type: 'string'
    },
    {
      name: 'location',
      title: 'Sted',
      type: 'string'
    },
    {
      name: 'collaborators',
      title: 'Samarbeidspartnere',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'photographer',
      title: 'Fotograf',
      type: 'string'
    }
  ]
}
