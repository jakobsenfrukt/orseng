<template>
  <div>
    <Seo :title="$t('projects')" />
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
