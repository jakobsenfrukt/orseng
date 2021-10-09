<template>
  <Layout>
    <section class="hero">
      <!--<div class="hero-image">
        <img src="/assets/images/wexwork03.jpg" />
        <div class="overlay overlay-top"></div>
        <div class="overlay overlay-bottom"></div>
      </div>-->
      <div class="hero-text">
        <p class="lead">Ørseng Interiørarkitektur leverer komplette interiørløsninger fra idé til ferdigstillelse, for offentlig og privat miljø.</p>
      </div>
    </section>
    <ProjectGrid />
    <Instafeed />
  </Layout>
</template>

<script>
import Instafeed from '@/components/Instafeed'
import ProjectGrid from '@/components/projects/ProjectGrid'

export default {
  components: {
    Instafeed,
    ProjectGrid
  },
  metaInfo: {
    title: 'Ørseng Interiørarkitektur'
  }
}
</script>

<style lang="scss" scoped>
.hero {
  padding-top: 7rem;
  &-image {
    position: relative;
    img {
      width: 100%;
    }
    /*.overlay {
      background: linear-gradient(transparent, var(--color-background));
      height: 16%;
      position: absolute;
      left: 0;
      right: 0;
      &-top {
        background: linear-gradient(var(--color-background), transparent);
        top: 0;
      }
      &-bottom {
        background: linear-gradient(transparent, var(--color-background));
        bottom: 0;
      }
    }*/
  }
  &-text {
    position: relative;
    padding: 4rem 2rem;
    .lead {
      font-size: 3rem;
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 200;
      max-width: 72rem;
      width: 100%;
      line-height: 1.4;
      margin: 0 auto;
      text-align: center;
    }
  }
}
</style>
