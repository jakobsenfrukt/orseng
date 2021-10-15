<template>
  <section class="project-hero">
    <div class="project-hero-image">
      <img
        :alt="project.mainImage.alt"
        :src="$urlForImage(project.mainImage, $static.metadata.sanityOptions).width(1600).auto('format').url()"
        class="project-hero-image-item"
      />
      <div class="overlay overlay-top"></div>
      <div class="overlay overlay-bottom"></div>
    </div>
    <h1 class="project-hero-title">{{ project.title }}</h1>
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
  height: 100vh;
  color: var(--color-white);
  &-image {
    height: 100vh;
    animation: zoomIn 2s ease forwards;
    &-item {
      position: absolute;
      width: 100%;
      height: 100vh;
      object-fit: cover;
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
      &-bottom {
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
        bottom: 0;
      }
    }
  }
  &-title {
    position: absolute;
    bottom: 1rem;
    animation: fadeUp 2s ease forwards;
    color: var(--color-white);
    font-size: var(--font-xl);
    font-family: var(--font-display);
    text-transform: uppercase;
    font-weight: 300;
    width: 100%;
    line-height: 1.3;
    margin: 0 auto;
    text-align: center;
    text-shadow: 0 2px 6px rgba(0, 0, 0, .8);
}
}
@keyframes zoomIn {
  from {
    transform: scale(1.05);
  }
  to {
    transform: scale(1);
  }
}
@keyframes fadeUp {
  from {
    opacity: .5;
    transform: translateY(30%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
