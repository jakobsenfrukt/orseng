<template>
  <article class="project">
    <div class="project-image">
      <g-image
        v-if="project.mainImage"
        class="project-image"
        :src="$urlForImage(project.mainImage, $static.metadata.sanityOptions).height(600).width(800).auto('format').url()"
        :alt="project.mainImage.alt"
      />
    </div>
    <div class="project-text">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-lead" v-if="project.lead">{{ project.lead }}</p>
      <div class="project-arrow"></div>
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
  position: relative;
  border-radius: calc(var(--radius)/3);
  transition: all .2s ease-in-out;
  margin: 0 auto 5rem;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  &-image {
    width: 100%;
  }
  &-text {
    text-align: center;
    width: 100%;
  }
  &-title {
    font-size: var(--font-xl);
    font-family: var(--font-display);
    font-weight: 400;
    text-transform: uppercase;
    margin: 0 auto;
    line-height: 1;
  }
  &-lead {
    font-size: 1rem;
    margin: 0 auto;
    max-width: 30rem;
  }
  /*&-arrow {
    width: 2rem;
    height: var(--border-width);
    background: var(--color-text);
    margin: 2rem auto;
  }*/
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