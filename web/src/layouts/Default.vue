<template>
  <div class="layout" :style="cssVars">
    <Header />
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
}
</static-query>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  props: {
    palette: Object
  },
  computed: {
    cssVars() {
      if (
        this.palette 
        && this.palette.light.bgColor.rgb 
        && this.palette.light.textColor.rgb
        && this.palette.dark.bgColor.rgb 
        && this.palette.dark.textColor.rgb
      ) {
        return {
          '--color-background-light': 'rgba(' + this.palette.light.bgColor.rgb.r + ',' + this.palette.light.bgColor.rgb.g + ',' + this.palette.light.bgColor.rgb.b + ',1)',
          '--color-text-light': 'rgba(' + this.palette.light.textColor.rgb.r + ',' + this.palette.light.textColor.rgb.g + ',' + this.palette.light.textColor.rgb.b + ',1)',
          '--color-background-dark': 'rgba(' + this.palette.dark.bgColor.rgb.r + ',' + this.palette.dark.bgColor.rgb.g + ',' + this.palette.dark.bgColor.rgb.b + ',1)',
          '--color-text-dark': 'rgba(' + this.palette.dark.textColor.rgb.r + ',' + this.palette.dark.textColor.rgb.g + ',' + this.palette.dark.textColor.rgb.b + ',1)',
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.layout {
  color: var(--color-text-light);
  background: var(--color-background-light);
  transition: color .5s linear, background-color .5s linear;
}
body[data-theme="dark"] {
 	.layout {
    color: var(--color-text-dark);
    background: var(--color-background-dark);
  }
}
.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter {
  opacity: 0;
}
</style>