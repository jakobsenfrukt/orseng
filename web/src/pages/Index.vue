<template>
  <Layout>
    <section class="hero">
      <img class="hero-image" src="/assets/images/wexwork03.jpg" />
      <div class="hero-text">
        <h1>Prosjektnavn</h1>
        <p class="lead">En kort prosjektbeskrivelse, som en intro til hva dette går ut på før man klikker seg inn på siden.</p>
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
  padding: var(--site-padding);
  &-image {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  &-text {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 1rem;
    h1 {
      font-size: 3rem;
    }
    .lead {
      font-size: 1.5rem;
    }
  }
}
</style>
