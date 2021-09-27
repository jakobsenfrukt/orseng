<template>
  <header class="site-header">
    <nav class="nav nav-left">
      <MenuIcon class="icon" />
      <g-link class="nav-link" to="/">Prosjekter</g-link>
      <g-link class="nav-link" to="/studio/">Studio</g-link>
    </nav>
    <g-link class="logo" to="/">
      <Logo />
    </g-link>
    <nav class="nav nav-right">
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
  position: absolute;
  width: 100%;
  background: linear-gradient(var(--color-background), transparent);
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
  flex-direction: column;
  justify-content: center;

  &-left {
    align-items: flex-start;
  }
  &-right {
    align-items: flex-end;
  }
}
.nav-link {
  margin-right: 20px;
}
</style>