<template>
  <div class="layout">
    <Header :overlay="overlay" />
    <MiniHeader />
    <transition name="fade" appear>
      <main class="site-main">
        <slot/>
      </main>
    </transition>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
  settings: sanitySiteSettings(id: "siteSettings") {
    description
    ogimg {
      asset {
        _id
        url
      }
    }
    themePalette {
      light {
        bgColor {
          hex
        }
        textColor {
          hex
        }
        detailColor {
          hex
        }
      }
      dark {
        bgColor {
          hex
        }
        textColor {
          hex
        }
        detailColor {
          hex
        }
      }
    }
  }
}
</static-query>

<script>
import Header from '~/components/Header.vue'
import MiniHeader from '~/components/MiniHeader.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    MiniHeader,
    Footer
  },
  props: {
    palette: Object,
    overlay: Boolean
  },
  methods: {
    changeColor() {
      let cssVars;
      if (this.palette) {
        cssVars = {
          '--color-background-light': this.palette.light.bgColor ? this.palette.light.bgColor.hex : 'var(--color-white)',
          '--color-text-light': this.palette.light.textColor ? this.palette.light.textColor.hex : 'var(--color-white)',
          '--color-detail-light': this.palette.light.detailColor ? this.palette.light.detailColor.hex : 'var(--color-black)',

          '--color-background-dark': this.palette.dark.bgColor ? this.palette.dark.bgColor.hex : 'var(--color-white)',
          '--color-text-dark': this.palette.dark.textColor ? this.palette.dark.textColor.hex : 'var(--color-white)',
          '--color-detail-dark': this.palette.dark.detailColor ? this.palette.dark.detailColor.hex : 'var(--color-white)'
        }
      } else if (this.$static.settings.themePalette) {
        const palette = this.$static.settings.themePalette;
        cssVars = {
          '--color-background-light': palette.light.bgColor ? palette.light.bgColor.hex : 'var(--color-white)',
          '--color-text-light': palette.light.textColor ? palette.light.textColor.hex : 'var(--color-white)',
          '--color-detail-light': palette.light.detailColor ? palette.light.detailColor.hex : 'var(--color-black)',

          '--color-background-dark': palette.dark.bgColor ? palette.dark.bgColor.hex : 'var(--color-white)',
          '--color-text-dark': palette.dark.textColor ? palette.dark.textColor.hex : 'var(--color-white)',
          '--color-detail-dark': palette.dark.detailColor ? palette.dark.detailColor.hex : 'var(--color-white)'
        }
      }

      Object.entries(cssVars).forEach(entry => {
        const [key, value] = entry;
        document.documentElement.style.setProperty(key, value)
      })
    }
  },
  mounted() {
    this.changeColor()
  }
}
</script>

<style lang="scss" scoped>
.layout {
  --color-text: var(--color-text-light);
  --color-background: var(--color-background-light);
  --color-detail: var(--color-detail-light);
  color: var(--color-text);
  background: var(--color-background);
  transition: color .5s linear, background-color .5s linear;
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