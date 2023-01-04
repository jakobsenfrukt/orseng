import {format} from 'date-fns'

export default {
  name: 'project',
  title: 'Prosjekt',
  type: 'document',
  initialValue: () => ({
    publishedAt: new Date().toISOString()
  }),
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'localeString'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Slutten på URLen til prosjektet, eks. "orseng.no/prosjekter/slug-kommer-her". Må skrives med små bokstaver, og uten mellomrom eller ÆØÅ.',
      options: {
        source: 'title.no',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      title: 'Publisert',
      type: 'datetime'
    },
    {
      name: 'lead',
      title: 'Ingress',
      type: 'localeText'
    },
    {
      title: 'Prosjektdetaljer',
      name: 'projectDetails',
      type: 'projectDetails'
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'localeSimplePortableText'
    },
    {
      name: 'categories',
      title: 'Kategorier',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'mainImage',
      title: 'Hovedbilde',
      type: 'localeFigure'
    },
    {
      name: 'gallery',
      title: 'Galleri',
      type: 'array',
      of: [
        {
          type: 'localeFigure'
        },
        {
          type: 'figureTwoColumn'
        },
        {
          type: 'figureThreeColumn'
        }
      ]
    },
    {
      name: 'themePalette',
      title: 'Fargepalett',
      type: 'themePalette'
    },
    {
      name: 'relatedProjects',
      title: 'Lignende prosjekter',
      type: 'array',
      of: [{type: 'reference', to: {type: 'project'}}]
    }
  ],
  preview: {
    select: {
      title: 'title.no',
      media: 'mainImage'
    }
  }
}
