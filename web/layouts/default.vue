<template>
  <div class="layout">
    <Header :overlay="overlay" />
    <MiniHeader />
    <transition name="fade" appear>
      <main class="site-main">
        <slot />
      </main>
    </transition>
    <Footer />
  </div>
</template>

<script lang="jsx">
import Header from "~/components/Header.vue";
import MiniHeader from "~/components/MiniHeader.vue";
import Footer from "~/components/Footer.vue";
import { changeToPalette } from "~/utils/color.js";

export default {
  components: {
    Header,
    MiniHeader,
    Footer,
  },
  async setup() {
    const query = groq`{
      "settings": *[_type == "siteSettings" && _id == "siteSettings"] {
        description,
        ogimg {
          asset
        },
        themePalette {
          light {
            bgColor {
              hex
            },
            textColor {
              hex
            },
            detailColor {
              hex
            },
          },
          dark {
            bgColor {
              hex
            },
            textColor {
              hex
            },
            detailColor {
              hex
            },
          },
        }
      }[0]
    }`;
    const { data } = await useSanityQuery(query);

    return { data };
  },
  computed: {
    overlay() {
      // the index page needs an overlay class
      const route = useRoute();
      if (!route.name) {
        return false;
      }
      return route.name.startsWith("index___");
    },
  },
  methods: {
    changeColor() {
      changeToPalette(this.data.settings.themePalette);
    },
  },
  mounted() {
    this.changeColor();
  },
  updated() {
    const route = useRoute();
    if (route.name && route.name.startsWith("prosjekter-slug___")) {
      return;
    }
    this.changeColor();
  },
};
</script>

<style lang="scss" scoped>
.layout {
  --color-text: var(--color-text-light);
  --color-background: var(--color-background-light);
  --color-detail: var(--color-detail-light);
  color: var(--color-text);
  background: var(--color-background);
  transition: color 0.5s linear, background-color 0.5s linear;
  position: relative;
}
body[data-theme="dark"] {
  .layout {
    --color-text: var(--color-text-dark);
    --color-background: var(--color-background-dark);
    --color-detail: var(--color-detail-dark);
  }
}
.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter {
  opacity: 0;
}
</style>
