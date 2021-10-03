<template>
  <footer class="site-footer" id="kontakt">
    <h2>Kontakt</h2>
    <div>
      +47 970 17 583<br />
      kristin@orseng.no<br />
    </div>
    <div>
      Instagram<br />
      Facebook<br />
      Linkedin<br />
    </div>
    <div>
      Ørseng Interiørarkitektur AS<br />
      2 Sandesundsveien<br />
      1724 Sarpsborg, Viken<br />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.site-footer {
  text-align: center;
  min-height: 100vh;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-end;
  text-align: left;

  h2 {
    grid-column: 1 / span 3;
  }
}
</style>