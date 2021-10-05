<template>
  <Layout>
    <section class="studio">
      <p class="lead">{{ $page.about.lead }}</p>
    </section>
    <section class="bio">
      <img
        class="portrait"
        v-if="$page.about.bio.mainImage"
        :alt="$page.about.bio.mainImage.alt"
        :src="$urlForImage($page.about.bio.mainImage, $page.metadata.sanityOptions).width(600).auto('format').url()"
      />
      <block-content :blocks="$page.about.bio._rawText" />
    </section>
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
  about: sanityAbout (id: "about") {
    title
    lead
    bio {
      _rawText
      mainImage {
        asset {
          _id
          url
        }
        caption
        alt
        hotspot {
          x
          y
          height
          width
        }
        crop {
          top
          bottom
          left
          right
        }
      }
    }
  }
}
</page-query>

<script>
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    BlockContent
  },
  metaInfo: {
    title: 'Studio'
  }
}
</script>

<style lang="scss" scoped>
.studio {
  padding: 10rem 4rem;
}
.lead {
  font-size: 2rem;
}
.bio {
  padding: 4rem;
}
.portrait {
  width: 12rem;
  max-width: 100%;
}
</style>