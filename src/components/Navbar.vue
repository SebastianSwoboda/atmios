<template>
    <b-navbar type="is-primary">
      <template slot="start">
        <b-navbar-item tag="router-link" to="/" exact>Home</b-navbar-item>
        <b-navbar-item tag="router-link" to="/about">Über uns</b-navbar-item>
      </template>
    </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
