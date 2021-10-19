<template>
  <article class="project" :style="cssVars" :class="{inview: isInView}">
    <h3 class="project-title">{{ project.title }}</h3>
    <div class="project-image-wrapper">
      <g-image
        v-if="project.mainImage"
        class="project-image"
        :src="$urlForImage(project.mainImage, $static.metadata.sanityOptions).height(600).width(800).auto('format').url()"
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
  computed: {
    cssVars() {
      if (this.project.themePalette) {
        return {
          '--color-background-light': this.project.themePalette.light.bgColor ? this.project.themePalette.light.bgColor.hex : 'var(--color-white)',
          '--color-text-light': this.project.themePalette.light.textColor ? this.project.themePalette.light.textColor.hex : 'var(--color-white)',
          '--color-detail-light': this.project.themePalette.light.detailColor ? this.project.themePalette.light.detailColor.hex : 'var(--color-white)',

          '--color-background-dark': this.project.themePalette.dark.bgColor ? this.project.themePalette.dark.bgColor.hex : 'var(--color-white)',
          '--color-text-dark': this.project.themePalette.dark.textColor ? this.project.themePalette.dark.textColor.hex : 'var(--color-white)',
          '--color-detail-dark': this.project.themePalette.dark.detailColor ? this.project.themePalette.dark.detailColor.hex : 'var(--color-white)',
        }
      }
    }
  },
  methods: {
    onEnterViewport(value) {
      this.isInView = value;
      let cssVars;

      if (this.project.themePalette) {
        cssVars = {
            '--color-background-light': this.project.themePalette.light.bgColor ? this.project.themePalette.light.bgColor.hex : 'var(--color-white)',
            '--color-text-light': this.project.themePalette.light.textColor ? this.project.themePalette.light.textColor.hex : 'var(--color-white)',
            '--color-detail-light': this.project.themePalette.light.detailColor ? this.project.themePalette.light.detailColor.hex : 'var(--color-white)',

            '--color-background-dark': this.project.themePalette.dark.bgColor ? this.project.themePalette.dark.bgColor.hex : 'var(--color-white)',
            '--color-text-dark': this.project.themePalette.dark.textColor ? this.project.themePalette.dark.textColor.hex : 'var(--color-white)',
            '--color-detail-dark': this.project.themePalette.dark.detailColor ? this.project.themePalette.dark.detailColor.hex : 'var(--color-white)'
        }
      }
      console.log(cssVars)

      Object.entries(cssVars).forEach(entry => {
        const [key, value] = entry;
        document.documentElement.style.setProperty(key, value)
      })
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
  padding: 6rem 3rem 3rem;
  &-image {
    height: 70vh;
    width: 100%;
    object-fit: cover;
    &-wrapper {
      width: 80%;
      margin: 0 auto;
      position: relative;
    }
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
  &-text {
    width: 50%;
    margin: 1rem 0 0 auto;
    transform: translateX(10%);
    opacity: 0;
    transition: all 1s ease-out;
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
    transform: translateX(-10%);
    opacity: 0;
    transition: all 1s ease-out;
  }
  &:nth-of-type(even) {
    .project-text {
      margin: 1rem auto 0 0;
      transform: translateX(-10%);
    }
    .project-title {
      text-align: right;
      transform: translateX(10%);
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
    .project-text {
      transform: translateX(0);
      opacity: 1;
    }
    .project-title {
      transform: translateX(0);
      opacity: 1;
    }
    &:nth-of-type(even) {
      .project-text {
        transform: translateX(0);
      }
      .project-title {
        transform: translateX(0);
      }
    }
  }
}
.observer {
  position: absolute;
  top: 10%;
  height: 80%;
}
</style>