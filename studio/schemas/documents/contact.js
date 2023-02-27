export default {
  name: 'contact',
  type: 'document',
  title: 'Kontakt',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Overskrift'
    },
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
      type: 'localeSimplePortableText'
    },
    {
      name: 'maplink',
      type: 'string',
      title: 'Lenke til Google Maps'
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: 'Kontakt',
      }
    }
  }
}
