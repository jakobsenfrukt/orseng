export const supportedLanguages = [
  { id: 'no', title: 'Norsk', isDefault: true },
  { id: 'en', title: 'Engelsk' },
]

export const baseLanguage = supportedLanguages.find((l) => l.isDefault)

export const localizedObjectOptions = ({ baseType }) => {
  return {
    // title: '',
    // name: '',
    type: 'object',
    // Fieldsets can be used to group object fields.
    // Here we omit a fieldset for the "default language",
    // making it stand out as the main field.
    fieldsets: [
      {
        title: 'Oversettelser',
        name: 'translations',
        options: { collapsible: true },
      },
    ],
    // Dynamically define one field per language
    fields: supportedLanguages.map((lang) => ({
      title: lang.title,
      name: lang.id,
      type: baseType,
      fieldset: lang.isDefault ? null : 'translations',
    })),
  }
}
