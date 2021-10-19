<template>
  <Layout>
    <br /><br /><br /><br />
    <ProjectGrid />
    <Instafeed />
  </Layout>
</template>

<script>
import Hero from '@/components/Hero'
import Instafeed from '@/components/Instafeed'
import ProjectGrid from '@/components/projects/ProjectGrid2'

export default {
  components: {
    Hero,
    Instafeed,
    ProjectGrid
  },
  metaInfo: {
    title: 'Ørseng Interiørarkitektur'
  }
}
</script>