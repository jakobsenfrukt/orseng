<template>
  <div>
    <Seo title="Prosjekter" />
    <br /><br /><br /><br />
    <ProjectGridSmall />
  </div>
</template>

<script>
import ProjectGridSmall from "@/components/projects/ProjectGridSmall";

export default {
  components: {
    ProjectGridSmall,
  },
};
</script>
