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
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Slutten på URLen til prosjektet, eks. orseng.no/prosjekter/slug-kommer-her',
      options: {
        source: 'title',
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
      type: 'text'
    },
    {
      title: 'Prosjektdetaljer',
      name: 'projectDetails',
      type: 'projectDetails'
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'simplePortableText'
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
      type: 'figure'
    },
    {
      name: 'gallery',
      title: 'Galleri',
      type: 'array',
      of: [
        {
          type: 'figure'
        },
        {
          type: 'figureTwoColumn'
        },
        {
          type: 'figureThreeColumn'
        },
        {
          type: 'video'
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
      title: 'title',
      media: 'mainImage'
    }
  }
}
