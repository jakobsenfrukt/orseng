<template>
  <Layout :palette="$page.project.themePalette">
    <div class="project">
      <ProjectHero :project="$page.project" />

      <div class="project-content">
        <block-content
          :blocks="$page.project._rawDescription"
          v-if="$page.project._rawDescription"
          class="block-content"
        />
      </div>

      <div class="project-details" v-if="$page.project.projectDetails">
        <div class="project-categories">
          <span>Type</span>
          <p v-if="$page.project.categories.length">{{ $page.project.categories[0].title }}</p>
        </div>
        <div class="project-year">
          <span>År</span>
          <p>{{ $page.project.publishedAt }}</p>
        </div>
        <div class="project-client" v-if="$page.project.projectDetails.client">
          <span>Kunde</span>
          <p>{{ $page.project.projectDetails.client }}</p>
        </div>
        <div class="project-location" v-if="$page.project.projectDetails.location">
          <span>Sted</span>
          <p>{{ $page.project.projectDetails.location }}</p>
        </div>
        <div class="project-collaborators" v-if="$page.project.projectDetails.collaborators">
          <span>Samarbeidspartnere</span>
          <ul class="project-collaborators-list">
            <li v-for="(collaborator, index) in $page.project.projectDetails.collaborators" :key="index">
              {{ collaborator }}
            </li>
          </ul>
        </div>
        <div class="project-photographer" v-if="$page.project.projectDetails.photographer">
          <span>Fotograf</span>
          <p>{{ $page.project.projectDetails.photographer }}</p>
        </div>
      </div>

      <ProjectGallery v-if="$page.project.gallery.length" :content="$page.project.gallery" />

      <div class="related" v-if="$page.project.relatedProjects.length">
        <div class="related-heading">
          <h2>Relaterte prosjekter</h2>
        </div>
        <div class="related-grid">
          <RelatedProjectItem
            v-for="(project, index) in $page.project.relatedProjects"
            :key="`related-${index}`"
            :project="project"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query project ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  project: sanityProject (id: $id) {
    title
    publishedAt (format: "YYYY")
    lead
    projectDetails {
      client
      location
      collaborators
      photographer
    }
    categories {
      id
      title
    }
    _rawDescription
    mainImage {
      asset {
        _id
        url
      }
      caption
      alt
      hotspot {
        x
        y
        height
        width
      }
      crop {
        top
        bottom
        left
        right
      }
    }
    themePalette {
      light {
        bgColor {
          hex
          rgb {
            r
            g
            b
          }
        }
        textColor {
          hex
          rgb {
            r
            g
            b
          }
        }
        detailColor {
          hex
          rgb {
            r
            g
            b
          }
        }
      }
      dark {
        bgColor {
          hex
          rgb {
            r
            g
            b
          }
        }
        textColor {
          hex
          rgb {
            r
            g
            b
          }
        }
        detailColor {
          hex
          rgb {
            r
            g
            b
          }
        }
      }
    }
    relatedProjects {
      title
      _id
      slug {
        current
      }
      mainImage {
        asset {
          _id
        }
        alt
      }
      categories {
        _id
        title
      }
    }
    gallery {
      ... on SanityFigure {
        _type
        asset {
          url
        }
        caption
        alt
      }
      ... on SanityFigureTwoColumn {
        _type
        columns
        image1 {
          asset {
            url
          }
          caption
          alt
        }
        image2 {
          asset {
            url
          }
          caption
          alt
        }
      }
      ... on SanityVideo {
        _type
        asset {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import ProjectHero from '~/components/projects/ProjectHero'
import ProjectGallery from '~/components/projects/ProjectGallery'
import BlockContent from '~/components/BlockContent'
import RelatedProjectItem from '~/components/projects/RelatedProjectItem'

export default {
  components: {
    ProjectHero,
    ProjectGallery,
    BlockContent,
    RelatedProjectItem
  },
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [
        {
          name: 'description',
          content: this.$page.project.lead ? this.$page.project.lead : ' '
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  margin-bottom: 7rem;

  &-content {
    display: flex;
    justify-content: center;
    margin: 0 auto;
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
    row-gap: 3rem;
    width: 100%;
    margin: 5rem auto 5rem;

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
  padding: 0 3rem;
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
  &:before, &:after {
    content: " ";
    display: block;
    flex: 1;
    align-self: center;
    height: var(--border-width);
    background: currentColor;
    opacity: .2;
  }
}
.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  .project {
    margin: 0;
  }
}
</style>
