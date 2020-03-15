<template>
  <b-navbar type="is-primary">
    <template slot="start">
      <b-navbar-item class="navItem" tag="router-link" to="/" exact>Home</b-navbar-item>
      <b-navbar-item class="navItem" tag="router-link" to="/service" exact
        >Dienstleistung</b-navbar-item
      >
      <b-navbar-item class="navItem" tag="router-link" to="/images" exact>Galerie</b-navbar-item>
      <b-navbar-item class="navItem" tag="router-link" to="/about">Über uns</b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navItem {
  padding: 0 20px;
}
</style>
