<template>
  <section class="instafeed">
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
}
.instalink {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
}
</style>