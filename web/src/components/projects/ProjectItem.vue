<template>
  <article class="project">
    <div class="project-image">
      <g-image
        v-if="project.mainImage"
        class="project-image"
        :src="$urlForImage(project.mainImage, $static.metadata.sanityOptions).height(800).width(800).auto('format').url()"
        :alt="project.mainImage.alt"
      />
    </div>
    <div class="project-text">
      <div v-if="project.categories.length">{{ project.categories[0].title }}</div>
      <h3 class="project-title">{{ project.title }}</h3>
      <!--<div class="project-lead" v-if="project._rawLead"><block-content :blocks="project._rawLead" /></div>-->
      <block-content :blocks="project._rawDescription" />
    </div>
    <g-link class="project-link" :to="`/prosjekter/${project.slug.current}`">Link</g-link>
  </article>
</template>

<static-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
}
</static-query>

<script>
import BlockContent from '@/components/BlockContent'

export default {
  components: {
    BlockContent
  },
  props: {
    project: Object
  }
}
</script>

<style lang="scss" scoped>
.project {
  display: block;
  position: relative;
  border-radius: calc(var(--radius)/3);
  transition: all .2s ease-in-out;
  
  &-image {
    width: 100%;
  }
  &-text {
    padding-top: .2rem;
  }
  &-title {
    font-size: 1.8rem;
    margin-bottom: .6rem;
  }
  &-lead {
    font-size: 1rem;
  }
  &-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>