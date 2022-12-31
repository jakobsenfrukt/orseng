<template>
  <div>
    <Seo
      :title="data.project.title"
      :description="data.project.lead ?? ''"
      :ogImage="data.project.mainImage.asset.url"
    />
    <div class="project">
      <ProjectHero :project="data.project" />

      <div class="project-content">
        <BlockContent
          :blocks="data.project.description"
          v-if="data.project.description"
          class="block-content"
        />
      </div>

      <div class="project-details" v-if="data.project.projectDetails">
        <!--<div class="project-categories">
          <span>Type</span>
          <p v-if="data.project.categories.length">{{ data.project.categories[0].title }}</p>
        </div>
        <div class="project-year">
          <span>År</span>
          <p>{{ data.project.publishedAt }}</p>
        </div>-->
        <div class="project-client" v-if="data.project.projectDetails.client">
          <span>Kunde</span>
          <p>{{ data.project.projectDetails.client }}</p>
        </div>
        <!--<div class="project-location" v-if="data.project.projectDetails.location">
          <span>Sted</span>
          <p>{{ data.project.projectDetails.location }}</p>
        </div>-->
        <div
          class="project-collaborators"
          v-if="data.project.projectDetails.collaborators"
        >
          <span>Samarbeidspartnere</span>
          <ul class="project-collaborators-list">
            <li
              v-for="(collaborator, index) in data.project.projectDetails
                .collaborators"
              :key="index"
            >
              {{ collaborator }}
            </li>
          </ul>
        </div>
        <div
          class="project-photographer"
          v-if="data.project.projectDetails.photographer"
        >
          <span>Fotograf</span>
          <p>{{ data.project.projectDetails.photographer }}</p>
        </div>
      </div>

      <ProjectGallery
        v-if="data.project.gallery.length"
        :content="data.project.gallery"
      />

      <div class="related" v-if="data.project.relatedProjects.length">
        <div class="related-heading">
          <h2>Relaterte prosjekter</h2>
        </div>
        <div class="related-grid">
          <ProjectItemSmall
            v-for="(project, index) in data.project.relatedProjects"
            :key="`related-${index}`"
            :project="project"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectHero from "~/components/projects/ProjectHero";
import ProjectGallery from "~/components/projects/ProjectGallery";
import BlockContent from "~/components/BlockContent";
import ProjectItemSmall from "~/components/projects/ProjectItemSmall";
import { changeToPalette } from "~/utils/color.js";

export default {
  components: {
    ProjectHero,
    ProjectGallery,
    BlockContent,
    ProjectItemSmall,
  },
  async setup(props) {
    const route = useRoute();
    const slug = route.params.slug;
    const query = groq`{
      "project": *[_type == "project" && slug.current == $slug][0] {
        relatedProjects[]->,
        categories[]->,
        ...
      }
    }`;
    const { data } = await useSanityQuery(query, { slug });
    return { data };
  },
  mounted() {
    if (this.data.project.themePalette) {
      changeToPalette(this.data.project.themePalette);
    }
  },
};
</script>

<style lang="scss" scoped>
.project {
  margin-bottom: 7rem;

  &-content {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 0 var(--spacing-l);
    font-size: 1.2rem;
    max-width: 36rem;

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }

  &-details {
    font-family: var(--font-body);
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    column-gap: 5rem;
    row-gap: var(--spacing-l);
    width: 100%;
    margin: 5rem auto;

    span {
      display: block;
      font-weight: 600;
      text-transform: uppercase;
      font-size: var(--font-xs);
      letter-spacing: var(--letter-spacing);
      color: var(--color-detail);
    }
    p {
      margin: 0;
    }
  }
  &-collaborators {
    &-list {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
}
.related {
  margin: 6rem auto;
  padding: 0 var(--spacing-l);
}
.related-heading {
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 1.5rem;
  h2 {
    margin: 0;
    font-size: var(--font-s);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
  }
  &:before,
  &:after {
    content: " ";
    display: block;
    flex: 1;
    align-self: center;
    height: var(--border-width);
    background: currentColor;
    opacity: 0.2;
  }
}
.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-m);
  .project {
    margin: 0;
  }
}

@media (max-width: 1200px) {
  .related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 800px) {
  .project {
    &-details {
      display: block;
      margin: 2.5rem auto;

      p,
      ul {
        margin-bottom: 2rem;
      }
    }
  }
  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
