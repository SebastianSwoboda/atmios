<template>
  <div class="container about has-text-centered">
    <h1 class="is-size-3 title">Über uns</h1>
    <img class="img" alt="Atmios Team" src="../assets/atmios-team.jpeg" />
    <p class="text">
      Wir sind fünf junge, interessierte
      und motivierte auszubildende
      Informatiker.
      Wir wollen unser neu gelerntes
      Wissen in unserem Unternehmen
      anwenden und vertiefen.
      Ausserdem hoffen wir, dass wir
      einigen Jugendlichen helfen
      können, die sich in einer
      ähnli
      chen Lage befinden
      wie wir es noch vor einigen
      Jahren waren.
    </p>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.about {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.img {
  width: 600px;
  padding-bottom: 20px;
}
.title {
  padding-top: 20px;
  padding-bottom: 20px;
}
.text{
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
}
</style>