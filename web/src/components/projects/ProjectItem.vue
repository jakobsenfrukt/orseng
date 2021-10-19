<template>
  <article class="project" :class="{inview: isInView}">
    <h3 class="project-title">{{ project.title }}</h3>
    <div class="project-image-wrapper">
      <g-image
        v-if="project.mainImage"
        class="project-image"
        :src="$urlForImage(project.mainImage, $static.metadata.sanityOptions).width(1900).auto('format').url()"
        :alt="project.mainImage.alt"
      />
      <div class="overlay overlay-top"></div>
    </div>
    <div class="project-text">
      <p class="project-lead" v-if="project.lead">{{ project.lead }}</p>
      <div class="project-arrow"></div>
    </div>
    <g-link class="project-link" :to="`/prosjekter/${project.slug.current}`">Link</g-link>

    <IntersectionObserver
      id="observer"
      class="observer"
      @on-enter-viewport="onEnterViewport"
    ></IntersectionObserver>
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
import IntersectionObserver from '~/components/tools/IntersectionObserver'

export default {
  components: {
    BlockContent,
    IntersectionObserver
  },
  props: {
    project: Object
  },
  data() {
    return {
      isInView: false
    }
  },
  methods: {
    onEnterViewport(value) {
      this.isInView = value;
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  transition: color .5s linear, background-color .5s linear;
  position: relative;
  border-radius: calc(var(--radius)/3);
  margin: 0;
  width: 100%;
  min-height: 101vh;
  padding: 6rem var(--site-padding-l) 3rem;
  &-image {
    height: 70vh;
    width: 100%;
    object-fit: cover;
    &-wrapper {
      width: 80%;
      margin: 0 auto;
      position: relative;

      .overlay {
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
        height: 40%;
        position: absolute;
        left: 0;
        right: 0;
        &-top {
          background: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, 0));
          top: 0;
        }
      }
    }
  }
  &-text {
    width: 50%;
    margin: 1rem auto 0;
  }
  &-title {
    font-size: var(--font-xl);
    font-family: var(--font-display);
    font-weight: 400;
    text-transform: uppercase;
    margin: 0 auto -.3em;
    line-height: 1;
    text-align: left;
    display: block;
    width: 90%;
    position: relative;
    z-index: 10;
    transform: translateX(-5%);
    opacity: 0;
    transition: all 2s ease;
  }
  &:nth-of-type(even) {
    .project-title {
      text-align: right;
      transform: translateX(5%);
    }
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
  &.inview {
    .project-title {
      transform: translateX(0);
      opacity: 1;
    }
    &:nth-of-type(even) {
      .project-title {
        transform: translateX(0);
      }
    }
  }
}
.observer {
  position: absolute;
  top: 10%;
  height: 20%;
}
</style>