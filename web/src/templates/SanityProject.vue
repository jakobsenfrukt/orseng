<template>
  <Layout>
    <div class="project">
      <header class="project-header">
        <img
          v-if="$page.project.mainImage"
          :alt="$page.project.mainImage.alt"
          :src="$urlForImage($page.project.mainImage, $page.metadata.sanityOptions).width(600).auto('format').url()"
        />
        <h1 class="project-title">{{ $page.project.title }}</h1>
        <p class="lead">{{ $page.project.lead }}</p>
      </header>

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
          <p>{{ $page.project.projectDetails.collaborators }}</p>
        </div>
        <div class="project-photographer" v-if="$page.project.projectDetails.photographer">
          <span>Fotograf</span>
          <p>{{ $page.project.projectDetails.photographer }}</p>
        </div>
      </div>

      <div class="project-gallery">
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
      <div class="related">
        <div class="related-heading">
          <h2>Relaterte prosjekter</h2>
          <div>&rarr; <g-link to="/prosjekter">Se alle prosjekter</g-link></div>
        </div>
        <div class="related-grid">
          <PostItem
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
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    BlockContent
  },
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [
        {
          name: 'description',
          content: this.$page.project.description
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  margin-bottom: 7rem;
  
  &-header {
    img {
      display: block;
      width: 100%;
    }
  }
  &-title {
    text-transform: none;
    font-size: 3rem;
    text-align: center;
    max-width: 44rem;
    margin: 2rem auto;
    padding: 0 2rem;
  }
  &-lead {
    margin: 3rem auto;
    font-size: 1.8rem;
  }

  &-content {
    display: flex;
    justify-content: center;
    max-width: 38rem;
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
    display: flex;
    gap: 2rem;
    max-width: 38rem;
    margin: 2rem auto 5rem;

    span {
      display: block;
      font-weight: bold;
      color: rgb(184, 111, 43);
    }
    p {
      margin: 0;
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
  max-width: 1000px;
}
.related-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  h2 {
    margin: 0;
  }
}
.related-grid {
  display: grid;
  grid-gap: var(--spacing-m);
  grid-template-columns: repeat(8, 1fr);
  .project {
    margin: 0;
  }
}
@media (max-width: 1000px) {
  .related-grid {
    grid-template-columns: repeat(8, 1fr);
  }
}
@media (max-width: 700px) {
  .project {
    &-gallery {
      .twocolumn {
        grid-template-columns: 1fr;
      }
    }
  }
  .related-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .related-heading {
    display: block;
    h2 {
      margin-bottom: 1rem;
    }
  }
}
@media (max-width: 640px) {
  .project {
    &-title {
      padding: 2rem 6rem 0;
      font-size: 2rem;
    }
    &-lead, &-content {
      padding: 0 2rem;
    }
  }
}
</style>
