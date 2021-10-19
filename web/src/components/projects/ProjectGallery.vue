<template>
  <section class="project-gallery">
    <div v-for="(item, index) in content" :key="`gallery-${index}`" class="project-gallery-row">
      <div v-if="item._type === 'figure'" class="single">
        <figure>
          <img
            :src="$urlForImage(item.asset.url, $page.metadata.sanityOptions).width(1200).auto('format').url()"
            :alt="item.alt"
          />
        </figure>
        <figcaption v-if="item.caption">
          <p class="caption">{{ item.caption }}</p>
        </figcaption>
      </div>
      <div v-if="item._type === 'figureTwoColumn'" class="double" :class="item.columns">
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
  </section>
</template>

<static-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
}
</static-query>

<script>
export default {
  props: {
    content: Array
  }
}
</script>

<style lang="scss" scoped>
.project-gallery {
  width: 100%;
  padding: var(--site-padding-l);
  
  &-row {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: var(--site-padding);
    margin-bottom: var(--site-padding);

    &:nth-child(even) {
      .double {
        figure {
          margin: 0;
          &:nth-child(odd) {
            margin: var(--site-padding-l) 0 0 0;
          }
        }
      }
    }
  }

  .single {
    grid-column: 2 / span 10;
  }

  .double {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--site-padding-l);

    figure {
      margin: var(--site-padding-l) 0 0 0;
      &:nth-child(odd) {
        margin: 0;
      }
    }

    &.onetwo {
      grid-template-columns: 1fr 2fr;
    }
    &.twoone {
      grid-template-columns: 2fr 1fr;
    }
    &.equal {
      grid-template-columns: 1fr 1fr;
    }
  }

  .single, .double, .video {
    margin-bottom: 2rem;
  }

  .video {
    video {
      width: 100%;
    }
  }

  figcaption .caption {
    width: 100%;
    max-width: 30rem;
    font-size: var(--font-s);
    padding: 1rem;
  }

  figure {
    margin: 0;
  }

  img {
    width: 100%;
  }
}
</style>