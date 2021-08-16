import S from '@sanity/desk-tool/structure-builder'

const hiddenDocTypes = listItem =>
  !['category', 'project', 'siteSettings', 'about'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Innhold')
    .items([
      S.listItem()
        .title('Generelt')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Generelt')
        ),
      S.listItem()
        .title('Prosjekter')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Prosjekter')),
      S.listItem()
        .title('Kategorier')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Kategorier')),
      S.listItem()
        .title('Om')
        .child(
          S.editor()
            .id('about')
            .schemaType('about')
            .documentId('about')
            .title('Om')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
