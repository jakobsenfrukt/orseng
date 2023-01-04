export default {
  name: 'figureThreeColumn',
  title: 'Bilder i tre kolonner',
  type: 'object',
  fields: [
    {
      name: 'image1',
      title: 'Bilde 1',
      type: 'localeFigure'
    },
    {
      name: 'image2',
      title: 'Bilde 2',
      type: 'localeFigure'
    },
    {
      name: 'image3',
      title: 'Bilde 3',
      type: 'localeFigure'
    }
  ],
  preview: {
    select: {
      imageUrl: 'image1.asset.url',
      title: '3 bilder'
    }
  }
}
