<template>
  <article class="project" :style="cssVars">
    <div class="project-title-wrapper">
      <h3 class="project-title">{{ project.title }}</h3>
    </div>
    <div class="project-image">
      <g-image
        v-if="project.mainImage"
        class="project-image"
        :src="$urlForImage(project.mainImage, $static.metadata.sanityOptions).height(600).width(800).auto('format').url()"
        :alt="project.mainImage.alt"
      />
    </div>
    <div class="project-text">
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
  }
}
</script>

<style lang="scss" scoped>
.project {
  --color-text: var(--color-text-light);
  --color-background: var(--color-background-light);
  --color-detail: var(--color-detail-light);
  color: var(--color-text);
  background: var(--color-background);
  transition: color .5s linear, background-color .5s linear;
}
body[data-theme="dark"] {
 	.project {
    --color-text: var(--color-text-dark);
    --color-background: var(--color-background-dark);
    --color-detail: var(--color-detail-dark);
  }
}
.project {
  position: relative;
  border-radius: calc(var(--radius)/3);
  transition: all .2s ease-in-out;
  margin: 0;
  width: 100%;
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: flex-end;
  &-image {
    width: 100%;
    grid-column: span 9;
    height: 100%;
    object-fit: cover;
  }
  &-text {
    width: 100%;
    grid-column: span 2;
    align-self: flex-start;
    padding: 0 0 0 1.5rem;
  }
  &-title {
    font-size: 8vh;
    font-family: var(--font-display);
    font-weight: 400;
    text-transform: uppercase;
    margin: 0 auto;
    line-height: 1;
    transform: rotate(-90deg) translateY(100%);
    transform-origin: 0 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80vh;
    &-wrapper {
      width: var(--font-xl);
      height: 80vh;
      position: relative;
      grid-column: span 1;
    }
  }
  &:nth-of-type(even) {
    .project-text {
      order: 1;
      padding: 0 1.5rem 0 0;
      align-self: flex-end;
    }
    .project-image {
      order: 2;
    }
    .project-title-wrapper {
      order: 3;
      align-self: flex-start;
    }
    .project-title {
      transform: rotate(90deg) translateX(-10%) translateY(-1.5rem);
      transform-origin: 0 100%;
      position: absolute;
      top: 0;
      bottom: auto;
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
}
</style>