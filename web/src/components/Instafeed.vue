<template>
  <section class="instafeed">
    <div class="instafeed-heading">
        <h2>Instagram</h2>
      </div>
    <!-- SnapWidget -->
    <iframe src="https://snapwidget.com/embed/963337" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden;  width:100%; "></iframe>
    <a href="https://instagram.com/orseng.interiorarkitektur" target="_blank" class="instalink"></a>
  </section>
</template>

<script>
export default {
  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://snapwidget.com/js/snapwidget.js')
    document.head.appendChild(recaptchaScript)
  }
}
</script>

<style lang="scss" scoped>
.instafeed {
  width: 100%;
  position: relative;
  padding: 6rem var(--spacing-l) 3rem;

  &-heading {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    h2 {
      margin: 0;
      font-size: var(--font-s);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing);
    }
    &:before, &:after {
      content: " ";
      display: block;
      flex: 1;
      align-self: center;
      height: var(--border-width);
      background: currentColor;
      opacity: .2;
    }
  }
}
.instalink {
  position: absolute;
  top: 6rem;
  left: var(--spacing-l);
  right: var(--spacing-l);
  bottom: 3rem;
  z-index: 2;
}
</style>