<template>
  <Layout class="about">
    <section class="about-section studio">
      <h2 class="about-heading bio-heading" v-if="$page.about.studio.title">{{ $page.about.studio.title }}</h2>
      <p class="lead about-lead">{{ $page.about.lead }}</p>
      <block-content :blocks="$page.about.studio._rawText" />
      <img
        class="portrait"
        v-if="$page.about.studio.mainImage"
        :alt="$page.about.studio.mainImage.alt"
        :src="$urlForImage($page.about.studio.mainImage, $page.metadata.sanityOptions).width(600).auto('format').url()"
      />
    </section>
    <div class="grid">
      <section class="about-section services">
        <h2 class="about-heading services-heading">Kompetanseområder</h2>
        <ul class="services-list">
          <li v-for="(service, index) in $page.about.services" :key="index" class="services-item">
            {{ service }}
          </li>
        </ul>
      </section>
      <section class="about-section clients">
        <h2 class="about-heading clients-heading">Kunder</h2>
        <ul class="clients-list">
          <li v-for="(client, index) in $page.about.clients" :key="index" class="clients-item">
            {{ client }}
          </li>
        </ul>
      </section>
    </div>
    <section class="about-section bio">
      <h2 class="about-heading bio-heading">{{ $page.about.bio.title }}</h2>
      <img
        class="portrait"
        v-if="$page.about.bio.mainImage"
        :alt="$page.about.bio.mainImage.alt"
        :src="$urlForImage($page.about.bio.mainImage, $page.metadata.sanityOptions).width(600).auto('format').url()"
      />
      <block-content :blocks="$page.about.bio._rawText" />
    </section>
  </Layout>
</template>

<page-query>
query {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  about: sanityAbout (id: "about") {
    title
    lead
    studio {
      title
      _rawText
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
    }
    services
    clients
    bio {
      title
      _rawText
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
  metaInfo: {
    title: 'Studio'
  }
}
</script>

<style lang="scss" scoped>
.about {
  &-heading {
    grid-column: 1 / -1;
    text-align: center;
    font-size: var(--font-s);
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: var(--letter-spacing);
    margin: 0 0 2rem;
  }
  &-lead {
    grid-column: 1 / -1;
    margin: 1rem auto 6rem;
  }
  &-section {
    max-width: 1000px;
    margin: 0 auto 5rem;
    padding: 0 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
}
.studio {
  padding: 10rem 3rem 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  padding: 0 3rem;
  .about-heading {
    text-align: left;
  }
}
.services {
  max-width: none;
  padding: 0 3rem 1rem 0;
  &-list {
    grid-column: 1 / -1;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  &-item {
    display: block;
    font-family: var(--font-display);
    font-size: var(--font-l);
    font-weight: 200;
    line-height: 1.2;
    padding-left: 3rem;
    margin-bottom: .4rem;
    position: relative;
    &:before {
      content: "—";
      display: block;
      position: absolute;
      left: 0;
    }
  }
}
.clients {
  max-width: none;
  padding: 0 3rem 1rem 0;
  width: 100%;
  &-list {
    grid-column: 1 / -1;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  &-item {
    display: block;
    font-family: var(--font-display);
    font-size: var(--font-l);
    font-weight: 200;
    line-height: 1.2;
    padding-left: 3rem;
    margin-bottom: .4rem;
    position: relative;
    &:before {
      content: "—";
      display: block;
      position: absolute;
      left: 0;
    }
  }
}
.portrait {
  width: 100%;
}
</style>