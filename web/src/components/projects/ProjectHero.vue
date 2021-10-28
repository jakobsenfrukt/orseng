<template>
  <section class="project-hero">
    <div class="project-hero-title-wrapper">
      <h1 class="project-hero-title">{{ project.title }}</h1>
    </div>
    <div class="project-hero-image">
      <img
        :alt="project.mainImage.alt"
        :src="$urlForImage(project.mainImage, $static.metadata.sanityOptions).width(1800).auto('format').url()"
        class="project-hero-image-item"
      />
    </div>
    <div class="project-hero-title-wrapper project-hero-title-wrapper-2">
      <h1 class="project-hero-title project-hero-title-2"><template v-if="project.categories.length">{{ project.categories[0].title }} &mdash; </template>{{ project.publishedAt }}</h1>
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
  padding: 6.5rem var(--spacing-l) 3rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: flex-end;
  &-image {
    animation: fadeIn 3s ease forwards;
    width: 100%;
    grid-column: span 10;
    height: 80vh;
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

    font-size: 9vh;
    font-family: var(--font-display);
    font-weight: 400;
    text-transform: uppercase;
    margin: 0 auto;
    line-height: 1;
    transform: rotate(-90deg) translateY(90%);
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
      animation: slideUp 2s ease forwards;
    }
    &-2 {
      transform: rotate(90deg) translateX(-12%) translateY(-1.5rem);
      transform-origin: 0 100%;
      position: absolute;
      top: 0;
      bottom: auto;
      opacity: .24;
    }
    &-wrapper-2 {
      align-self: flex-start;
      animation: slideDown 2s ease forwards;
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
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 800px) {
  .project-hero {
    align-items: flex-start;
    grid-template-columns: 1fr;
    padding: 5rem 0 0;

    &-title {
      transform: rotate(0);
      font-size: var(--font-xl);
      text-align: center;
      width: 100%;
      position: static;

      &-wrapper {
        height: auto;
        width: 100%;
        order: 2;
      }
      &-wrapper-2 {
        order: 3;
      }
    }
    &-image {
      order: 1;
      grid-column: span 1;
      height: auto;
      margin: var(--spacing-m) auto;
    }
    &-lead {
      order: 4;
      grid-column: span 1;
      text-align: center;
      margin: 2rem auto 3rem;
      max-width: 90%;
    }
  }
}
</style>
