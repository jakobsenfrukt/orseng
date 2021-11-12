<template>
  <article class="project" :class="{inview: isInView}">
    <div class="project-wrapper">
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
        :id="`observer-${project.id}`"
        class="observer"
        @on-enter-viewport="onEnterViewport"
      ></IntersectionObserver>
    </div>
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
      if (value === false) {
        return
      }

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

      Object.entries(cssVars).forEach(entry => {
        const [key, value] = entry;
        document.body.style.setProperty(key, value)
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
  padding: 6rem var(--spacing-l) 3rem;
  &-wrapper {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }
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
    padding: 0 10% 0 0;
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
    transform: translateX(-2%);
    opacity: 0;
    transition: opacity 1s ease-out, transform 1s ease-out, color .5s ease-out;
  }
  &:nth-of-type(even) {
    .project-text {
      margin: 1rem auto 0 0;
      padding: 0 0 0 10%;
    }
    .project-title {
      text-align: right;
      transform: translateX(2%);
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
    top: 6rem;
    left: var(--spacing-l);
    right: var(--spacing-l);
    bottom: 3rem;
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
  top: 30%;
  height: 1px;
}

@media (max-width: 800px) {
  .project {
    min-height: 0;
    &-image {
      height: auto;
      &-wrapper {
        width: 100%;
      }
    }
    &-title {
      width: 100%;
      text-align: center;
      margin-bottom: -.25em;
    }
    &-text {
      width: 100%;
      margin: 0;
      padding: .5rem 1rem;
      text-align: center;
    }
    &:nth-of-type(even) {
      .project-text {
        margin: 0;
        padding: .5rem 1rem;
      }
      .project-title {
        text-align: center;
      }
    }
  }
}
</style>