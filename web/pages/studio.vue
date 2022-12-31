<template>
  <Seo title="Studio" />
  <div class="about">
    <section class="about-section studio">
      <p class="lead about-lead">{{ data.about.lead }}</p>
      <div class="about-text">
        <h2 class="about-heading bio-heading" v-if="data.about.studio.title">
          {{ data.about.studio.title }}
        </h2>
        <BlockContent :blocks="data.about.studio.text" />
      </div>
      <img
        class="portrait"
        v-if="data.about.studio.mainImage"
        :alt="data.about.studio.mainImage.alt"
        :src="
          $urlFor(data.about.studio.mainImage).width(600).auto('format').url()
        "
      />
    </section>
    <div class="grid">
      <section class="about-section services">
        <h2 class="about-heading services-heading">{{ $t("competencies") }}</h2>
        <ul class="services-list">
          <li
            v-for="(service, index) in data.about.services"
            :key="index"
            class="services-item"
          >
            {{ service }}
          </li>
        </ul>
      </section>
      <section class="about-section clients">
        <h2 class="about-heading clients-heading">{{ $t("customers") }}</h2>
        <ul class="clients-list">
          <li
            v-for="(client, index) in data.about.clients"
            :key="index"
            class="clients-item"
          >
            {{ client }}
          </li>
        </ul>
      </section>
    </div>
    <section class="about-section bio">
      <img
        class="portrait"
        v-if="data.about.bio.mainImage"
        :alt="data.about.bio.mainImage.alt"
        :src="$urlFor(data.about.bio.mainImage).width(600).auto('format').url()"
      />
      <div class="about-text">
        <h2 class="about-heading bio-heading">{{ data.about.bio.title }}</h2>
        <BlockContent :blocks="data.about.bio.text" />
      </div>
    </section>
  </div>
</template>

<script>
import BlockContent from "~/components/BlockContent";

export default {
  components: {
    BlockContent,
  },
  async setup() {
    const query = groq`{
      "about": *[_type == "about" && _id == "about"][0]
    }`;
    const { data } = await useSanityQuery(query);
    return { data };
  },
};
</script>

<style lang="scss" scoped>
.about {
  &-heading {
    font-size: var(--font-s);
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: var(--letter-spacing);
    margin: 0 0 2rem;
  }
  &-lead {
    grid-column: 1 / -1;
    margin: 1rem auto 6rem;
  }
  &-section {
    max-width: 54rem;
    margin: 0 auto 5rem;
    padding: 0 var(--spacing-l);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
}
.studio {
  padding: 10rem var(--spacing-l) 0;
}
.grid {
  max-width: 54rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  align-items: flex-start;
  padding: 0 var(--spacing-l);
  .about-heading {
    text-align: left;
  }
}
.services {
  max-width: none;
  padding: 0;
  &-list {
    grid-column: 1 / -1;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  &-item {
    display: block;
    font-size: var(--font-m);
    font-weight: 300;
    line-height: 1.2;
    padding-left: var(--spacing-m);
    margin-bottom: 0.4rem;
    position: relative;
    &:before {
      content: "—";
      display: block;
      position: absolute;
      left: 0;
    }
  }
}
.clients {
  max-width: none;
  width: 100%;
  padding: 0;
  &-list {
    grid-column: 1 / -1;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  &-item {
    display: block;
    font-size: var(--font-m);
    font-weight: 300;
    line-height: 1.2;
    padding-left: var(--spacing-m);
    margin-bottom: 0.4rem;
    position: relative;
    &:before {
      content: "—";
      display: block;
      position: absolute;
      left: 0;
    }
  }
}
.portrait {
  width: 100%;
}

@media (max-width: 1000px) {
  .about {
    &-section {
      grid-template-columns: 1fr;
      img {
        margin-bottom: 2rem;
      }
    }
  }
  .grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 800px) {
  .about {
    &-lead {
      margin: 0 auto 4rem;
      font-size: var(--font-m);
    }
  }
  .services,
  .clients {
    &-item {
      padding-left: var(--spacing-xl);
    }
  }
}
</style>
