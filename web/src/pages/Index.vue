<template>
  <Layout>
    <section class="hero">
      <img class="hero-image" src="/assets/images/wexwork03.jpg" />
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
  &-image {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
}
</style>
