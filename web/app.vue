<script lang="ts" setup>
const locale = useState<string>("locale.i18n");
</script>

<template>
  <Html :lang="locale">
    <Body>
      <NoScript>
        Ånei! Du mangler JavaScript! Det må aktiveres i nettleseren din for at
        du skal kunne se denne nettsiden.
      </NoScript>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
