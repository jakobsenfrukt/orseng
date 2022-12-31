<template>
  <section class="project-grid">
    <ProjectItem
      v-for="project in data.projects.slice(0, limit)"
      :key="project.id"
      :project="project"
    />
    <div v-if="data.projects.length > limit" class="project-grid__show-more">
      <NuxtLink to="/prosjekter">Se alle prosjekter</NuxtLink>
    </div>
  </section>
</template>

<script>
import ProjectItem from "@/components/projects/ProjectItem";

export default {
  components: {
    ProjectItem,
  },
  props: {
    limit: {
      type: Number,
      default: 6,
    },
  },
  async setup() {
    const query = groq`{
      "projects": *[_type == "project"] | order(publishedAt desc) {
        id,
        title,
        slug {
          current
        },
        categories {
          id,
          title
        },
        publishedAt,
        lead,
        description,
        mainImage,
        themePalette
      }
    }`;
    const { data } = await useSanityQuery(query);
    return { data };
  },
};
</script>

<style lang="scss" scoped>
.project-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: var(--spacing);
  margin: 0 auto;

  &__show-more {
    a {
      display: block;
      width: 24rem;
      max-width: 90%;
      background: var(--color-text);
      color: var(--color-background);
      padding: 1rem 2rem;
      margin: 0 auto;
      text-align: center;
      transition: opacity 0.3s ease;
      &:hover {
        opacity: 0.6;
      }
    }
  }
}
</style>
