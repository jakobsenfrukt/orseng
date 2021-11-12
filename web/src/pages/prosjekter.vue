<template>
  <Layout>
    <br /><br /><br /><br />
    <ProjectGridSmall />
  </Layout>
</template>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  settings: sanitySiteSettings(id: "siteSettings") {
    description
    ogimg {
      asset {
        url
      }
    }
  }
}
</page-query>

<script>
import ProjectGridSmall from '@/components/projects/ProjectGridSmall'

export default {
  components: {
    ProjectGridSmall
  },
  metaInfo() {
    return {
      title: 'Prosjekter',
      meta: [
        {
          name: 'description',
          key: 'description',
          content: this.$page.settings.description
        },
        {
          name: 'og:image',
          key: 'og:image',
          content: this.$page.settings.ogimg.asset.url
        }
      ]
    }
  }
}
</script>