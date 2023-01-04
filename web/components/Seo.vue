<template>
  <Head>
    <Title>{{ title }}{{ title ? " - " : "" }}Ørseng Interiørarkitektur</Title>
    <Meta
      name="description"
      :content="
        description ?? $localized(defaults.settings.description, locale)
      "
    />
    <Meta
      name="og:image"
      v-if="ogImage ?? defaults.settings.ogimg.asset.url"
      :content="ogImage ?? defaults.settings.ogimg.asset.url"
    />
  </Head>
</template>

<script setup>
const { locale } = useI18n();

const props = defineProps({
  title: String,
  description: String,
  ogImage: String,
});

const query = groq`{
  "settings": *[_type == "siteSettings" && _id == "siteSettings"] {
    description,
    ogimg {
      asset {
        ...
      }
    }
  }[0]
}`;
const { data: defaults } = await useSanityQuery(query);
</script>
