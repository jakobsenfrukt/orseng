<template>
  <header class="site-header" :class="{open: menuOpen}">
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

export default {
  components: {
    Logo,
    MenuIcon
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
  position: absolute;
  z-index: 1000;
  width: 100%;
  color: var(--color-white);
  //animation: fadeDown 1s ease forwards;
}

.logo {
  width: 100%;
  height: 4rem;
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
    padding: 1.5rem;
  }

  &-link {
    display: inline-block;
    position: relative;
    font-family: var(--font-main);
    font-weight: 600;
    font-size: var(--font-s);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
    cursor: pointer;
    text-shadow: 0 2px 4px rgba(0, 0, 0, .6);
    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: -.1em;
      left: 0;
      height: var(--border-width);
      width: 0;
      background: currentColor;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .6);
      transition: width .3s ease;
    }
    &:hover {
      &:after {
        width: 100%;
        transition: width .36s ease;
      }
    }
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

@media (max-width: 1000px) {
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
@keyframes fadeDown {
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