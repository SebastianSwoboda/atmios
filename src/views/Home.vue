<template>
  <div class="home container">
    <img class="img" alt="Atmios Logo" src="../assets/atmiosLogo.png" />
    <h2 class="text">Wir bauen <b>Ihren</b> personalisierten Computer</h2>

  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  text-align: center;
  overflow-y: auto;
}
.img {
  max-width: 100px;
  padding-bottom: 20px;
  padding-top: 80px;
}

.text {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-size: 200%;
}
</style>
