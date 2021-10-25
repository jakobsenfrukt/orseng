export default {
  name: 'figureThreeColumn',
  title: 'Bilder i tre kolonner',
  type: 'object',
  fields: [
    {
      name: 'image1',
      title: 'Bilde 1',
      type: 'figure'
    },
    {
      name: 'image2',
      title: 'Bilde 2',
      type: 'figure'
    },
    {
      name: 'image3',
      title: 'Bilde 3',
      type: 'figure'
    }
  ],
  preview: {
    select: {
      imageUrl: 'image1.asset.url',
      title: '3 bilder'
    }
  }
}
