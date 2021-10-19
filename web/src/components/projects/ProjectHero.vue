<template>
  <section class="project-hero">
    <div class="project-hero-title-wrapper">
      <h1 class="project-hero-title">{{ project.title }}</h1>
    </div>
    <div class="project-hero-image">
      <img
        :alt="project.mainImage.alt"
        :src="$urlForImage(project.mainImage, $static.metadata.sanityOptions).width(1600).auto('format').url()"
        class="project-hero-image-item"
      />
    </div>
    <div class="project-hero-title-wrapper project-hero-title-wrapper-2">
      <h1 class="project-hero-title project-hero-title-2">{{ project.title }}</h1>
    </div>
    <p class="lead project-hero-lead" v-if="project.lead">{{ project.lead }}</p>
  </section>
</template>

<static-query>
query {
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
}
</static-query>

<script>
export default {
  props: {
    project: Object
  }
}
</script>

<style lang="scss" scoped>
.project-hero {
  position: relative;
  padding: 6.5rem var(--site-padding-l) 3rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: flex-end;
  &-image {
    animation: fadeIn 3s ease forwards;
    width: 100%;
    grid-column: span 10;
    height: 100%;
    object-fit: cover;
    &-item {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-title {
    position: absolute;
    bottom: 3rem;
    font-family: var(--font-display);
    text-transform: uppercase;
    font-weight: 300;
    width: calc(100% - 6rem);
    line-height: 1.3;
    margin: 0 auto;
    opacity: .3;

    font-size: 10vh;
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
    &-2 {
      transform: rotate(90deg) translateX(-12%) translateY(-1.5rem);
      transform-origin: 0 100%;
      position: absolute;
      top: 0;
      bottom: auto;
    }
    &-wrapper-2 {
      align-self: flex-start;
    }
  }
  &-lead {
    grid-column: 2 / span 9;
    text-align: left;
    margin: 1.5rem 0;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
