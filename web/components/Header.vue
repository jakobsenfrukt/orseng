<template>
  <header class="site-header" :class="{ overlay: overlay }">
    <nav class="nav nav-main nav-left">
      <NuxtLink class="nav-link" :to="localePath('/prosjekter')">{{
        $t("projects")
      }}</NuxtLink>
      <NuxtLink class="nav-link" :to="localePath('/studio')">Studio</NuxtLink>
    </nav>
    <NuxtLink class="logo" :to="localePath('/')" :class="{ open: menuOpen }">
      <Logo />
    </NuxtLink>
    <nav class="nav nav-main nav-right">
      <span class="nav-link" @click="toAnchor('#kontakt')">{{
        $t("contact")
      }}</span>
      <a
        class="nav-link"
        href="https://instagram.com/orseng.interiorarkitektur"
        target="_blank"
        >Instagram</a
      >
      <NuxtLink class="nav-link" :to="otherLocalePath()">{{
        locale === "no" ? "EN" : "NO"
      }}</NuxtLink>
    </nav>
    <div class="nav-mobile-wrapper" :class="{ open: menuOpen }">
      <div class="menu-toggle-wrapper">
        <div role="button" @click="toggleMenu" class="menu-toggle">
          <MenuIcon class="menu-toggle-icon" :open="menuOpen" />
        </div>
      </div>
      <nav class="nav-mobile">
        <NuxtLink class="nav-mobile-link" :to="localePath('/prosjekter')">{{
          $t("projects")
        }}</NuxtLink>
        <NuxtLink class="nav-mobile-link" :to="localePath('/studio')"
          >Studio</NuxtLink
        >
        <span class="nav-mobile-link" @click="toAnchor('#kontakt')">{{
          $t("contact")
        }}</span>
        <a
          class="nav-mobile-link"
          href="https://instagram.com/orseng.interiorarkitektur"
          target="_blank"
          >Instagram</a
        >
        <br />
        <NuxtLink class="nav-mobile-link" :to="otherLocalePath()">{{
          locale === "no" ? "EN" : "NO"
        }}</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from "@/components/graphics/logo/Logo.vue";
import MenuIcon from "@/components/graphics/icons/MenuIcon.vue";

export default {
  components: {
    Logo,
    MenuIcon,
  },
  props: {
    overlay: Boolean,
  },
  setup() {
    const switchLocalePath = useSwitchLocalePath();
    const { locale } = useI18n();

    const otherLocalePath = () => {
      const otherLocale = locale.value === "no" ? "en" : "no";
      return switchLocalePath(otherLocale);
    };

    return { locale, otherLocalePath };
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toAnchor(anchor) {
      document.querySelector(anchor).scrollIntoView({
        behavior: "smooth",
      });
      // close menu if on mobile
      this.menuOpen = false;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      /*if (this.menuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }*/
    },
  },
};
</script>

<style lang="scss" scoped>
.site-header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  padding: var(--spacing);
  position: absolute;
  z-index: 1000;
  width: 100%;
  &.overlay {
    color: var(--color-white);
  }
}

.logo {
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
  position: relative;
  z-index: 1000;

  &.open {
    color: var(--color-background);
  }
}

.nav {
  position: relative;
  z-index: 10;
  &-main {
    display: flex;
    align-items: center;
    padding: var(--spacing-s) var(--spacing-m);
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
    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: -0.1em;
      left: 0;
      height: var(--border-width);
      width: 0;
      background: currentColor;
      transition: width 0.3s ease;
    }
    &:hover {
      &:after {
        width: 100%;
        transition: width 0.36s ease;
      }
    }
  }
  .overlay {
    nav-link {
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
      &:after {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
      }
    }
    .logo {
      filter: drop-shadow(0 3px 5px rgba(0, 0, 0, 0.7));
    }
  }

  &-left {
    justify-content: flex-start;
    .nav-link {
      margin: 0 var(--spacing-l) 0 0;
    }
  }
  &-right {
    justify-content: flex-end;
    .nav-link {
      margin: 0 0 0 var(--spacing-l);
    }
  }
}

@media (max-width: 1000px) {
  .nav {
    &-main {
      .nav-link {
        display: none;
      }
    }
  }
}

.nav-mobile {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  background: var(--color-text);
  color: var(--color-background);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  display: none;

  &-link {
    position: relative;
    display: block;
    margin-bottom: 1.5rem;
    font-size: var(--font-m);
    font-family: var(--font-main);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
    cursor: pointer;

    &.active--exact {
      font-style: italic;
      cursor: default;
      &:hover {
        &:after {
          display: none;
        }
      }
    }
  }

  &-wrapper {
    &.open {
      height: 100vh;
    }
  }
}
.menu-toggle {
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: 0;
  right: 0;
  padding: var(--spacing);
  z-index: 101;
  cursor: pointer;

  &-icon {
    width: 1.4rem;
    position: absolute;
    top: 50%;
  }

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
    .nav-mobile {
      opacity: 1;
      transform: translateY(0);
      animation: menuEnter 0.3s linear forwards;

      &-link {
        animation: menuItemEnter 0.3s linear forwards;
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
