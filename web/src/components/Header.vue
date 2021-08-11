<template>
  <header class="site-header">
    <div class="logo">
      <h1>Ørseng Interiørarkitektur</h1>
    </div>
    <nav class="nav">
      <g-link class="nav-link" to="/">Prosjekter</g-link>
      <g-link class="nav-link" to="/partners/">Samarbeidspartnere</g-link>
      <g-link class="nav-link" to="/about/">Om meg</g-link>
      <g-link class="nav-link" to="/contact/">Kontakt</g-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.logo {
  h1 {
    line-height: 1;
    margin: 0;
  }
}

.nav-link {
  margin-left: 20px;
}
</style>