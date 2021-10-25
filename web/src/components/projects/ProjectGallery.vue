<template>
  <section class="project-gallery">
    <div v-for="(item, index) in content" :key="`gallery-${index}`" class="project-gallery-row">
      <div v-if="item._type === 'figure'" class="single">
        <figure>
          <img
            :src="$urlForImage(item.asset.url, $page.metadata.sanityOptions).width(1600).auto('format').url()"
            :alt="item.alt"
          />
          <figcaption v-if="item.caption">
            <p class="caption">{{ item.caption }}</p>
          </figcaption>
        </figure>
      </div>

      <div v-if="item._type === 'figureTwoColumn'" class="double" :class="item.columns">
        <figure>
          <img
            :src="$urlForImage(item.image1.asset.url, $page.metadata.sanityOptions).width(800).auto('format').url()"
            :alt="item.image1.alt"
          />
          <figcaption v-if="item.image1.caption">
            <p class="caption">{{ item.image1.caption }}</p>
          </figcaption>
        </figure>
        <figure>
          <img
            :src="$urlForImage(item.image2.asset.url, $page.metadata.sanityOptions).width(800).auto('format').url()"
            :alt="item.image2.alt"
          />
          <figcaption v-if="item.image2.caption">
            <p class="caption">{{ item.image2.caption }}</p>
          </figcaption>
        </figure>
      </div>

      <div v-if="item._type === 'figureThreeColumn'" class="triple">
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
            :alt="item.image2.alt"
          />
          <figcaption v-if="item.image2.caption">
            <p class="caption">{{ item.image2.caption }}</p>
          </figcaption>
        </figure>
        <figure>
          <img
            :src="$urlForImage(item.image3.asset.url, $page.metadata.sanityOptions).width(600).auto('format').url()"
            :alt="item.image3.alt"
          />
          <figcaption v-if="item.image3.caption">
            <p class="caption">{{ item.image3.caption }}</p>
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
    margin-bottom: var(--site-padding-m);
  }

  .single {
    width: 100%;
  }

  .double {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: var(--site-padding-m);

    &.onetwo {
      figure:nth-child(1) {
        grid-column: span 1;
      }
      figure:nth-child(2) {
        grid-column: span 2;
      }
    }
    &.twoone {
      figure:nth-child(1) {
        grid-column: span 2;
      }
      figure:nth-child(2) {
        grid-column: span 1;
      }
    }
    &.equal {
      grid-template-columns: 1fr 1fr;
    }
  }

  figure {
    height: 100%;
    img {
      display: block;
      height: 100%;
      object-fit: cover;
    }
  }

  .triple {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: var(--site-padding-m);
  }

  .single, .double, .triple, .video {
    margin-bottom: var(--site-padding-m);
  }

  .double, .triple {
    align-items: flex-start;
  }

  .video {
    video {
      width: 100%;
    }
  }

  figcaption .caption {
    width: 100%;
    max-width: 30rem;
    font-size: var(--font-xs);
    color: var(--color-white);
    padding: 0;
    margin: 0;
  }

  figure {
    margin: 0;
    position: relative;
  }

  figcaption {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: var(--site-padding-l) var(--site-padding) var(--site-padding);
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
  }

  img {
    width: 100%;
  }
}
</style>