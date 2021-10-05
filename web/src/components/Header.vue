<template>
  <header class="site-header">
    <nav class="nav nav-left">
      <!--<MenuIcon class="icon" />-->
      <g-link class="nav-link" to="/">Prosjekter</g-link>
      <g-link class="nav-link" to="/studio">Studio</g-link>
    </nav>
    <g-link class="logo" to="/">
      <Logo />
    </g-link>
    <nav class="nav nav-right">
      <a class="nav-link" href="#kontakt">Kontakt</a>
      <a class="nav-link" href="https://instagram.com/orseng.interiorarkitektur" target="_blank">Instagram</a>
      <ToggleTheme />
    </nav>
  </header>
</template>

<script>
import Logo from '@/components/graphics/logo/Logo.vue'
import MenuIcon from '@/components/graphics/icons/MenuIcon.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  components: {
    Logo,
    MenuIcon,
    ToggleTheme
  }
}
</script>

<style lang="scss" scoped>
.site-header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  padding: var(--site-padding);
  position: fixed;
  z-index: 1000;
  width: 100%;
}

.logo {
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
}

.icon {
  width: 1.4rem;
}

.nav {
  display: flex;
  align-items: center;
  padding: 2rem;

  &-link {
    font-family: var(--font-main);
    font-weight: 600;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: .05em;
  }

  &-left {
    justify-content: flex-start;
    .nav-link {
      margin: 0 3rem 0 0;
    }
  }
  &-right {
    justify-content: flex-end;
    .nav-link {
      margin: 0 0 0 3rem;
    }
  }
}
</style>