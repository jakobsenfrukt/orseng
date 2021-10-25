<template>
  <Layout>
    <br /><br /><br /><br />
    <ProjectGridSmall />
    <Instafeed />
  </Layout>
</template>

<script>
import Hero from '@/components/Hero'
import Instafeed from '@/components/Instafeed'
import ProjectGridSmall from '@/components/projects/ProjectGridSmall'

export default {
  components: {
    Hero,
    Instafeed,
    ProjectGridSmall
  },
  metaInfo: {
    title: 'Ørseng Interiørarkitektur'
  }
}
</script>