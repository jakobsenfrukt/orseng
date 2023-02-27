export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Generelt',
  fields: [
    {
      name: 'description',
      type: 'localeText',
      title: 'Beskrivelse',
      description: 'Beskrivelse som dukker opp i søkemotorer og sosiale medier.'
    },
    {
      name: 'ogimg',
      type: 'image',
      title: 'Facebookbilde',
      description: 'Vises når man deler siden på Facebook o.l. hvis ikke et annet bilde er tilgjengelig.',
      validation: Rule => Rule.error('Mangler Facebookbilde!').required(),
    },
    {
      name: 'themePalette',
      title: 'Fargepalett',
      type: 'themePalette'
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: 'Generelt',
      }
    }
  }
}
