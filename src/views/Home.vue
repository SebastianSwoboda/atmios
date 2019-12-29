<template>
  <div class="home container">
    <img class="img" alt="Atmios Logo" src="../assets/atmiosLogo.png" />
    <p class="text">
      Wir bauen personalisierte Computer für unsere
      Kunden. Dabei passen wir jedes Gerät so an,
      dass es die Bedürfnisse und Anforderungen für den bestmöglichen Preis erfüllt. Der Kunde
      wendet sich dabei persönlich an uns. Mit gezielten Fragen stellen wir die Anforderungen
      fest, für die wir dann eine Konfiguration, je nach Budget des Kunden, zusammenstellen.
      Sobald der Kunde einverstanden ist, bestellen wir die Komponenten und bauen den
      Computer zusammen. Der Kunde bekommt dann den fertigen Computer geliefert. Wir
      versprechen, dass dieser voll funktionsfähig
      ist und die Anforderungen des Kunden erfüllt.
      Die einzelnen Komponenten haben alle eine Garantie von zwei Jahren (bei neuen Teilen).
      Dem Kunden versuchen wir durch unsere Recherche und unserem günstigen Service ein
      bestmögliches Preis-Leistungs-Verhältnis
      zu bieten.
    </p>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.home {
  padding-top: 20px;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow-y: auto;
}
.img {
  max-width: 80px;
  padding-bottom: 20px;
}

.text{
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
</style>