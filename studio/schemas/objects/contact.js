export default {
  name: 'contact',
  type: 'object',
  title: 'Kontakt',
  fields: [
    {
      name: 'phone',
      type: 'string',
      title: 'Telefon'
    },
    {
      name: 'email',
      type: 'string',
      title: 'E-post'
    },
    {
      name: 'instagram',
      type: 'string',
      title: 'Instagram'
    },
    {
      name: 'facebook',
      type: 'string',
      title: 'Facebook'
    },
    {
      name: 'linkedin',
      type: 'string',
      title: 'Linkedin'
    },
    {
      name: 'address',
      title: 'Adresse',
      type: 'simplePortableText'
    },
    {
      name: 'maplink',
      type: 'string',
      title: 'Lenke til Google Maps'
    }
  ]
}
