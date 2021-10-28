<template>
  <footer class="site-footer" id="kontakt">
    <h2 class="contact-heading">{{$static.contact.title}}</h2>
    <div class="contact-grid">
      <div>
        <h3 class="contact-label">Kontakt</h3>
        <a class="contact-link" :href="`tel:${$static.contact.phone}`" target="_blank">{{$static.contact.phone}}</a><br />
        <a class="contact-link" :href="`mailto:${$static.contact.email}`" target="_blank">{{$static.contact.email}}</a><br />
      </div>
      <div>
        <h3 class="contact-label">Sosiale medier</h3>
        <a class="contact-link" :href="$static.contact.instagram" target="_blank">Instagram</a><br />
        <a class="contact-link" :href="$static.contact.facebook" target="_blank">Facebook</a><br />
        <a class="contact-link" :href="$static.contact.linkedin" target="_blank">Linkedin</a><br />
      </div>
      <div>
        <h3 class="contact-label">Adresse</h3>
        <block-content :blocks="$static.contact._rawAddress" class="contact-text" />
        <a class="contact-link" :href="$static.contact.maplink" target="_blank">Se i kart</a><br />
      </div>
    </div>
    <div class="footer-grid">
      <div class="toplink">
        <span role="button" @click="toTop()">Til toppen</span>
      </div>
      <ToggleTheme class="theme" />
      <div class="credits">Nettside av <a href="https://jakobsenfrukt.no">JF&amp;G</a></div>
    </div>
  </footer>
</template>

<static-query>
query {
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
  contact: sanityContact(id: "contact") {
    title
    phone
    email
    instagram
    facebook
    linkedin
    _rawAddress
    maplink
  }
}
</static-query>

<script>
import BlockContent from '@/components/BlockContent.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  components: {
    BlockContent,
    ToggleTheme
  },
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.site-footer {
  min-height: 100vh;
  padding: 4rem 2rem 6rem;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  position: relative;
}
.contact {
  &-heading {
    padding: 0 1rem;
    font-family: var(--font-display);
    font-size: var(--font-xxl);
    margin: 2rem 0;
  }
  &-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-start;
    padding: 0 1rem 4rem;
  }
  &-label {
    margin: 0 auto 2rem;
    font-family: var(--font-main);
    font-size: var(--font-m);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);

    display: none;
  }
}
.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-l);

  font-family: var(--font-main);
  font-size: var(--font-s);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing);
}
.credits {
  order: 1;
  text-align: left;
}
.theme {
  order: 2;
}
.toplink {
  order: 3;
  text-align: right;

  span {
    display: inline-block;
    cursor: pointer;
  }
}

@media (max-width: 1000px) {
  .contact {
    &-heading {
      font-size: var(--font-xl);
      padding: 0;
    }
    &-grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-l);
      padding: 0 0 var(--spacing-l);
    }
    &-label {
      margin: 0 auto 2rem;
      font-family: var(--font-main);
      font-size: var(--font-m);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing);

      display: none;
    }
  }
  .footer-grid {
    align-items: flex-start;
    padding: 0 2rem 2rem;
    font-size: var(--font-xs);
  }
}
</style>