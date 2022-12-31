<template>
  <div>
    <Seo title="Forside" />
    <Hero />
    <ProjectGrid />
    <Instafeed />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Instafeed from "@/components/Instafeed";
import ProjectGrid from "@/components/projects/ProjectGrid";

export default {
  components: {
    Hero,
    Instafeed,
    ProjectGrid,
  },
};
</script>
