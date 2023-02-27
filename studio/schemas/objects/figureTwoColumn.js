export default {
  name: 'figureTwoColumn',
  title: 'Bilder i to kolonner',
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
      title: 'Kolonner',
      name: 'columns',
      type: 'string',
      options: {
        list: [
          {title: '2 + 1', value: 'twoone'},
          {title: '1 + 2', value: 'onetwo'},
          {title: '1 + 1', value: 'equal'}
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'image1.asset.url',
      title: '2 bilder'
    }
  }
}
