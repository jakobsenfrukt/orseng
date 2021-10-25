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
    grid-column: 2 / span 10;
  }

  .double {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--site-padding-m);

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

  /*figure {
    height: 100%;
    img {
      height: 100%;
      object-fit: cover;
    }
  }*/

  .triple {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: var(--site-padding-m);
  }

  .single, .double, .video {
    margin-bottom: 2rem;
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
    font-size: var(--font-s);
    padding: 1rem 0;
  }

  figure {
    margin: 0;
    position: relative;
  }

  img {
    width: 100%;
  }
}
</style>