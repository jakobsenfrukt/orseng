<template>
  <Layout overlay>
    <Hero />
    <ProjectGrid />
    <Instafeed />
  </Layout>
</template>

<page-query>
query {
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
import Hero from '@/components/Hero'
import Instafeed from '@/components/Instafeed'
import ProjectGrid from '@/components/projects/ProjectGrid'

export default {
  components: {
    Hero,
    Instafeed,
    ProjectGrid
  },
  metaInfo() {
    return {
      title: 'Forside',
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