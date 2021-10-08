<template>
  <footer class="site-footer" id="kontakt">
    <div class="contact-grid">
      <div>
        <h2 class="contact-label">Kontakt</h2>
        <a class="contact-link" :href="`tel:${$static.settings.contact.phone}`" target="_blank">{{$static.settings.contact.phone}}</a><br />
        <a class="contact-link" :href="`mailto:${$static.settings.contact.email}`" target="_blank">{{$static.settings.contact.email}}</a><br />
      </div>
      <div>
        <h2 class="contact-label">Adresse</h2>
        <block-content :blocks="$static.settings.contact._rawAddress" class="contact-text" />
        <a class="contact-link" :href="$static.settings.contact.maplink" target="_blank">Se i kart</a><br />
      </div>
      <div>
        <h2 class="contact-label">Sosiale medier</h2>
        <a class="contact-link" :href="$static.settings.contact.instagram" target="_blank">Instagram</a><br />
        <a class="contact-link" :href="$static.settings.contact.facebook" target="_blank">Facebook</a><br />
        <a class="contact-link" :href="$static.settings.contact.linkedin" target="_blank">Linkedin</a><br />
      </div>
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
  settings: sanitySiteSettings(id: "siteSettings") {
    contact {
      phone
      email
      instagram
      facebook
      linkedin
      _rawAddress
      maplink
    }
  }
}
</static-query>

<script>
import BlockContent from '@/components/BlockContent.vue'

export default {
  components: {
    BlockContent
  }
}
</script>

<style lang="scss" scoped>
.site-footer {
  text-align: center;
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .contact {
    &-grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: flex-start;
    }
    &-label {
      margin: 0 auto 2rem;
      font-family: var(--font-main);
      font-size: var(--font-m);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing);
    }
    &-link, &-text {
      font-family: var(--font-display);
      font-size: 2rem;
      font-weight: 300;
      font-style: italic;
    }
  }
}
</style>