<template>
  <section class="hero">
    <div class="hero-image">
      <img
        v-for="(image, index) in $static.frontpage.hero"
        :key="index"
        :alt="image.alt"
        :src="$urlForImage(image, $static.metadata.sanityOptions).width(1600).auto('format').url()"
        class="hero-image-item"
        :class="(index === currentIndex) ? 'current' : ''"
      />
      <div class="overlay overlay-top"></div>
      <div class="overlay overlay-bottom"></div>
      <nav class="hero-image-nav">
        <button class="arrow arrow-prev" @click="prev()"><Arrow /></button>
        <button class="arrow arrow-next" @click="next()"><Arrow /></button>
      </nav>
      <nav class="hero-image-nav-indicator">
        <button 
          v-for="(image, index) in $static.frontpage.hero"
          :key="index"
          class="indicator"
          :class="(index === currentIndex) ? 'current' : ''"
        >
        </button>
      </nav>
    </div>
    <div class="hero-text">
      <p class="lead">{{ $static.frontpage.lead }}</p>
    </div>
  </section>
</template>

<static-query>
query {
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
  frontpage: sanityFrontpage(id: "frontpage") {
    lead
    hero {
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
</static-query>

<script>
import Arrow from '@/components/graphics/icons/Arrow.vue'

export default {
  components: {
    Arrow
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  computed: {
    images() {
      return this.$static.frontpage.hero
    }
  },
  methods: {
    next() {
      if (this.currentIndex === (this.images.length-1)) {
        this.currentIndex = 0
        return
      }
      this.currentIndex++;
    },
    prev() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.images.length
      }
      this.currentIndex--;
    },
    runCarousel() {
      setInterval(this.next, 4000);
    }
  },
  mounted() {
    this.runCarousel()
  }
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 100vh;
  color: var(--color-white);
  &-image {
    height: 100vh;
    animation: zoomIn 1s ease-out forwards;
    background: var(--color-black);
    &-item {
      position: absolute;
      width: 100%;
      height: 100vh;
      object-fit: cover;
      opacity: 0;
      transition: opacity 2.6s ease;

      &.current {
        opacity: 1;
      }
    }
    .overlay {
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
      height: 40%;
      position: absolute;
      left: 0;
      right: 0;
      &-top {
        background: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, 0));
        top: 0;
      }
      &-bottom {
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
        bottom: 0;
      }
    }
    &-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 2rem;
      left: 2rem;
      display: flex;
      justify-content: space-between;
      .arrow {
        background: none;
        outline: none;
        border: none;
        width: 2rem;
        height: 2rem;
        color: var(--color-white);
        cursor: pointer;
        &-next {
          transform: rotate(180deg);
        }
      }
      &-indicator {
        position: absolute;
        bottom: 1rem;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: .5rem;
        .indicator {
          display: block;
          width: .5rem;
          height: .5rem;
          padding: 0;
          background: transparent;
          outline: none;
          border: var(--border-width-thin) solid var(--color-white);
          border-radius: 50px;
          transition: background 1.6s ease;
          &.current {
            background: var(--color-white);
          }
        }
      }
    }
  }
  &-text {
    position: absolute;
    bottom: 6rem;
    width: 100%;
    animation: fadeUp 2s ease forwards;
    .lead {
      color: var(--color-white);
      font-size: var(--font-l);
      font-family: var(--font-display);
      font-weight: 400;
      max-width: 48rem;
      width: 100%;
      line-height: 1.3;
      margin: 0 auto;
      text-align: center;
      text-shadow: 0 2px 6px rgba(0, 0, 0, .8);
    }
  }
}
@keyframes zoomIn {
  from {
    transform: scale(1.05);
  }
  to {
    transform: scale(1);
  }
}
@keyframes fadeUp {
  from {
    opacity: .5;
    transform: translateY(30%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
