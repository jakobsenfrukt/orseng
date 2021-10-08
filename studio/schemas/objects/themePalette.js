export default {
  name: 'themePalette',
  type: 'object',
  title: 'Fargepalett',
  fields: [
    {
      name: 'light',
      type: 'colorSet',
      title: 'Lyst tema'
    },
    {
      name: 'dark',
      type: 'colorSet',
      title: 'Mørkt tema'
    }
  ]
}
