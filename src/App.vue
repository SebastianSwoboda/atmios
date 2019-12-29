<template>
  <section class="fullheight">
    <div class="sitecontent">
      <Navbar />
      <router-view />
    </div>
    <footer class="has-text-centered sitefooter has-background-primary">
      <p class="footertext has-text-white-bis">info@atmios.ch</p>
    </footer>
  </section>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html,
body,
#app {
  height: 100%;
  overflow-y: auto !important;
}

.sitecontent {
  padding-bottom: 2.5rem;
}

.fullheight {
  min-height: 100vh;
  position: relative;
}

.sitefooter {
  height: 2.5rem;
  position: absolute;
  width: 100%;
  bottom: 0;
  display: table;
  vertical-align: middle;
  text-align: center;
}

.footertext {
  display: table-cell;
  vertical-align: middle;
}
</style>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
$primary: #446a5d;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);
$footer-background-color: $primary;
$footer-color: $primary-invert;

$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "twitter": (
    $twitter,
    $twitter-invert
  ),
  "footer-background-color": (
    $primary,
    $primary-invert
  )
);

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
