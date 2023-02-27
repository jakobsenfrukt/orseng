const hiddenDocTypes = (listItem) =>
  ![
    'category',
    'project',
    'siteSettings',
    'about',
    'frontpage',
    'contact',
    'translation.metadata',
  ].includes(listItem.getId())

export default (S) =>
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
        .title('Forside')
        .child(
          S.editor()
            .id('frontpage')
            .schemaType('frontpage')
            .documentId('frontpage')
            .title('Forside')
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
      S.listItem()
        .title('Kontakt')
        .child(
          S.editor()
            .id('contact')
            .schemaType('contact')
            .documentId('contact')
            .title('Kontakt')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
