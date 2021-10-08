<template>
  <header class="site-header" :class="{open: menuOpen}">

    <div class="overlay-wrapper">
      <div class="overlay overlay-light"></div>
      <div class="overlay overlay-dark"></div>
    </div>
    <nav class="nav nav-main nav-left">
      <div role="button" @click="menuOpen = !menuOpen"><MenuIcon class="menu-toggle nav-icon" /></div>
      <g-link class="nav-link" to="/">Prosjekter</g-link>
      <g-link class="nav-link" to="/studio">Studio</g-link>
    </nav>
    <g-link class="logo" to="/">
      <Logo />
    </g-link>
    <nav class="nav nav-main nav-right">
      <span class="nav-link" @click="toAnchor('#kontakt')">Kontakt</span>
      <a class="nav-link" href="https://instagram.com/orseng.interiorarkitektur" target="_blank">Instagram</a>
      <ToggleTheme />
    </nav>

    <nav class="nav-mobile">
      <g-link class="nav-link" to="/">Prosjekter</g-link>
      <g-link class="nav-link" to="/studio">Studio</g-link>
      <span class="nav-link" @click="toAnchor('#kontakt')">Kontakt</span>
      <a class="nav-link" href="https://instagram.com/orseng.interiorarkitektur" target="_blank">Instagram</a>
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
  },
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toAnchor(anchor) {
      document.querySelector(anchor).scrollIntoView({
          behavior: 'smooth'
      })
      // close menu if on mobile
      this.menuOpen = false
    }
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

.overlay {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  transition: opacity .6s linear;

  &-light {
    background: linear-gradient(var(--color-background-light), transparent);
    opacity: 1;
  }
  &-dark {
    background: linear-gradient(var(--color-background-dark), transparent);
    opacity: 0;
  }

  &-wrapper {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 8rem;
  }
}
body[data-theme="dark"] {
 	.overlay-dark {
    opacity: 1;
  }
  .overlay-light {
    opacity: 0;
  }
}

.logo {
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
  position: relative;
  z-index: 100;
}

.nav {
  position: relative;
  z-index: 10;
  &-main {
    display: flex;
    align-items: center;
    padding: 2rem;
  }

  &-link {
    font-family: var(--font-main);
    font-weight: 600;
    font-size: var(--font-m);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
    cursor: pointer;
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
  &-mobile {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    background: var(--color-text);
    color: var(--color-background);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    display: none;

    .nav-link {
      display: block;
      margin-bottom: 1.5rem;
    }
  }
}
.menu-toggle {
  width: 1.4rem;
  position: relative;
  z-index: 100;

  display: none;
}

@media (max-width: 800px) {
  .nav {
    &-main {
      .nav-link {
        display: none;
      }
    }
    &-mobile {
      display: flex;
      opacity: 0;
      transform: translateY(-100%);
    }
  }
  .open {
    color: var(--color-background);
    .nav {
      &-mobile {
        opacity: 1;
        transform: translateY(0);
        animation: menuEnter .3s linear forwards;

        .nav-link {
          animation: menuItemEnter .3s linear forwards;
        }
      }
    }
  }
  .menu-toggle {
    display: block;
  }
}

@keyframes menuEnter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes menuItemEnter {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>