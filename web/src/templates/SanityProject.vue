<template>
  <Layout :palette="$page.project.themePalette">
    <div class="project">
      <ProjectHero :project="$page.project" />

      <div class="project-content">
        <p class="lead" v-if="$page.project.lead">{{ $page.project.lead }}</p>
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

      <div class="project-gallery" v-if="$page.project.gallery.length">
        <div v-for="(item, index) in $page.project.gallery" :key="`content-${index}`">
          <div v-if="item._type === 'figure'" class="onecolumn">
            <img
              :src="$urlForImage(item.asset.url, $page.metadata.sanityOptions).width(1200).auto('format').url()"
              :alt="item.alt"
            />
            <p class="caption">{{ item.caption }}</p>
          </div>
          <div v-if="item._type === 'figureTwoColumn'" class="twocolumn">
            <figure>
              <img
                :src="$urlForImage(item.image1.asset.url, $page.metadata.sanityOptions).width(600).auto('format').url()"
                :alt="item.image1.alt"
              />
              <figcaption v-if="item.image1.caption">
                <p class="caption">{{ item.image1.caption }}</p>
              </figcaption>
            </figure>
            <figure>
              <img
                :src="$urlForImage(item.image2.asset.url, $page.metadata.sanityOptions).width(600).auto('format').url()"
                :alt="item.image1.alt"
              />
              <figcaption v-if="item.image2.caption">
                <p class="caption">{{ item.image2.caption }}</p>
              </figcaption>
            </figure>
          </div>
          <div v-if="item._type === 'video'" class="video">
            <video controls>
              <source :src="item.asset.url" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
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
          rgb {
            r
            g
            b
          }
        }
        textColor {
          rgb {
            r
            g
            b
          }
        }
      }
      dark {
        bgColor {
          rgb {
            r
            g
            b
          }
        }
        textColor {
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
import BlockContent from '~/components/BlockContent'
import RelatedProjectItem from '~/components/projects/RelatedProjectItem'

export default {
  components: {
    ProjectHero,
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

  &-lead {
    margin: 3rem auto;
  }

  &-content {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    font-size: 1.2rem;
    
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }

  &-details {
    font-family: var(--font-body);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
    row-gap: 1rem;
    max-width: 38rem;
    margin: 2rem auto 5rem;

    span {
      display: block;
      font-weight: 600;
      text-transform: uppercase;
      font-size: var(--font-xs);
      letter-spacing: var(--letter-spacing);
      color: rgb(184, 111, 43);
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
  &-gallery {
    max-width: 1000px;
    margin: 2rem auto;
    .onecolumn, .twocolumn, .video {
      margin-bottom: 2rem;
    }
    .video {
      video {
        width: 100%;
      }
    }
    .twocolumn {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    }
    .caption {
      width: 50%;
      font-size: .9rem;
    }
    figcaption .caption {
      width: 100%;
      font-size: .9rem;
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
