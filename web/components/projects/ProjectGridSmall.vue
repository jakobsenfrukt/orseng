<template>
  <section class="project-grid">
    <ProjectItemSmall
      v-for="project in data.projects"
      :key="project.id"
      :project="project"
    />
  </section>
</template>

<script>
import ProjectItemSmall from "@/components/projects/ProjectItemSmall";

export default {
  components: {
    ProjectItemSmall,
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
  grid-template-columns: repeat(3, 1fr);
  column-gap: var(--spacing-m);
  align-items: flex-start;
  margin: 0 auto;
  padding: var(--spacing-l);
}

@media (max-width: 1200px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 800px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
