<template>
  <article class="project">
    <div class="project-image">
      <img
        v-if="project.mainImage"
        class="project-image"
        :src="
          $urlFor(project.mainImage).height(600).width(800).auto('format').url()
        "
        :alt="$localized(project.mainImage.alt, locale)"
      />
    </div>
    <div class="project-text">
      <h3 class="project-title">{{ $localized(project.title, locale) }}</h3>
      <div class="project-arrow"></div>
    </div>
    <NuxtLink
      class="project-link"
      :to="
        localePath({
          name: 'prosjekter-slug',
          params: { slug: project.slug.current },
        })
      "
      >Link</NuxtLink
    >
  </article>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  setup() {
    const { locale } = useI18n();
    return { locale };
  },
};
</script>

<style lang="scss" scoped>
.project {
  position: relative;
  border-radius: calc(var(--radius) / 3);
  transition: all 0.2s ease-in-out;
  margin: 0 auto var(--spacing-xl);
  width: 100%;
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
    font-size: var(--font-l);
    font-family: var(--font-display);
    font-weight: 400;
    text-transform: uppercase;
    margin: var(--spacing) auto;
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
