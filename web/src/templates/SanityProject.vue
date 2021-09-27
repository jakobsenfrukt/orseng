<template>
  <Layout>
    <div class="project">
      <header class="project-header">
        <h1 class="project-title">{{ $page.project.title }}</h1>
        <img
          v-if="$page.project.mainImage"
          :alt="$page.project.mainImage.alt"
          :src="$urlForImage($page.project.mainImage, $page.metadata.sanityOptions).width(600).auto('format').url()"
        />
        <block-content
          class="lead project-lead"
          :blocks="$page.project._rawDescription"
          v-if="$page.project._rawDescription"
        />
      </header>

      <div class="project-content">
        <block-content
          :blocks="$page.project._rawDescription"
          v-if="$page.project._rawDescription"
          class="block-content"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query project ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  project: sanityProject (id: $id) {
    title
    publishedAt (format: "D. MMMM YYYY")
    categories {
      id
      title
    }
    _rawDescription
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
</page-query>

<script>
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    BlockContent
  },
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [
        {
          name: 'description',
          content: this.$page.project.description
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  margin-bottom: 7rem;
  padding-top: 4rem;
  
  &-header {
    img {
      display: block;
      width: 100%;
      max-width: 48rem;
      margin: 2rem auto;
    }
  }
  &-title {
    text-transform: none;
    font-size: 3rem;
    text-align: center;
    max-width: 44rem;
    margin: 2rem auto;
    padding: 0 2rem;
  }
  &-lead {
    margin: 3rem auto;
    font-size: 1.8rem;
  }

  &-content {
    display: flex;
    justify-content: center;
    max-width: 38rem;
    margin: 0 auto;
    
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}
@media (max-width: 640px) {
  .project {
    &-title {
      padding: 2rem 6rem 0;
      font-size: 2rem;
    }
    &-lead, &-content {
      padding: 0 2rem;
    }
  }
}
</style>
