export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Generelt',
  fields: [
    {
      name: 'description',
      type: 'text',
      title: 'Beskrivelse',
      description: 'Beskrivelse som dukker opp i søkemotorer og sosiale medier.'
    },
    {
      name: 'contact',
      type: 'contact',
      title: 'Kontakt',
      validation: Rule => Rule.error('Mangler kontaktinfo!').required()
    },
    {
      name: 'ogimg',
      type: 'image',
      title: 'Facebookbilde',
      description: 'Vises når man deler siden på Facebook o.l. hvis ikke et annet bilde er tilgjengelig.',
      validation: Rule => Rule.error('Mangler Facebookbilde!').required(),
    }
  ]
}