export default {
  name: 'localeFigure',
  title: 'Bilde',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Bildetekst',
      name: 'caption',
      type: 'localeString',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'alt',
      type: 'localeString',
      title: 'Alternativ tekst',
      description:
        'Viktig for universell utforming og SEO! Beskriv kort hva bildet viser.',
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'Bilde',
    },
  },
}
