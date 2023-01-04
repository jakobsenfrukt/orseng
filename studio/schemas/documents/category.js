export default {
  name: 'category',
  type: 'document',
  title: 'Kategori',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title'
    }
  ],
  preview: {
    select: {
      title: 'title.no',
      subtitle: 'title.en'
    }
  }
}
