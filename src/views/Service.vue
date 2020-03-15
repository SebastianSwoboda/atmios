<template>
  <div>
    <h1 class="title">Unsere Dienstleistung</h1>
    <p class="topText">
      Wir bauen personalisierte Computer für unsere Kunden. Dabei passen wir
      jedes Gerät so an, dass es die Bedürfnisse und Anforderungen für den
      bestmöglichen Preis erfüllt. Der Kunde wendet sich dabei persönlich an
      uns. Mit gezielten Fragen stellen wir die Anforderungen fest, für die wir
      dann eine Konfiguration, je nach Budget des Kunden, zusammenstellen.
      Sobald der Kunde einverstanden ist, bestellen wir die Komponenten und
      bauen den Computer zusammen. Der Kunde bekommt dann den fertigen Computer
      geliefert. Wir versprechen, dass dieser voll funktionsfähig ist und die
      Anforderungen des Kunden erfüllt. Die einzelnen Komponenten haben alle
      eine Garantie von zwei Jahren (bei neuen Teilen). Dem Kunden versuchen wir
      durch unsere Recherche und unserem günstigen Service ein bestmögliches
      Preis-Leistungs-Verhältnis zu bieten.
    </p>
    <nav class="breadcrumb has-arrow-separator root" aria-label="breadcrumbs">
      <ul class="list">
        <li v-bind:class="{ active: selectedItem === 0 }">
          <a v-on:click="selectedItem = 0">Kontakt</a>
        </li>
        <li v-bind:class="{ active: selectedItem === 1 }">
          <a v-on:click="selectedItem = 1">Offerte</a>
        </li>
        <li v-bind:class="{ active: selectedItem === 2 }">
          <a v-on:click="selectedItem = 2">Bezahlung</a>
        </li>
        <li v-bind:class="{ active: selectedItem === 3 }">
          <a v-on:click="selectedItem = 3">Lieferung</a>
        </li>
      </ul>
    </nav>

    <p v-if="selectedItem === 0" class="text">
      Die Kontaktaufnahme mit uns geschieht über unsere Email
      <b><a class="mailto" href="mailto:info@atmios.ch">info@atmios.ch</a></b
      >. Nach der ersten Kontaktaufnahme werden alle weiteren Gespräche mit
      Ihnen persönlich geführt.
    </p>
    <p v-else-if="selectedItem === 1" class="text">
      In einem persönlichen Gespräch mit Ihnen stellen wir eine Offerte
      zusammen. Bei dieser wird auf Ihr Budget geachtet und auf all Ihre
      Wünsche.
    </p>
    <p v-else-if="selectedItem === 2" class="text">
      Der Preis der Offerte wird nach der Zusammenstellung dieser von Ihnen
      bezahlt. Nach Bezahlung der Offerte wird der Computer nach Angaben der
      Offerte zusammengebaut. Danach wird Ihnen Ihr persönlicher Computer
      geliefert und es wird eine weitere Rechnung folgen mit dem Preis für den
      Aufwand, welcher für das Zusammenbauen anfiel. Dieser wurde in der Offerte
      auch schon festgelegt und ist Ihnen dementsprechend schon im voraus
      bekannt.
    </p>
    <p v-else class="text">
      Wir werden Ihnen Ihren persönlichen Computer direkt nach Hause liefern, zu
      der Zeit, welche Ihnen am besten passt.
    </p>
  </div>
</template>

<script>
export default {
  name: "Service",
  data() {
    return { selectedItem: 0 };
  }
};
</script>

<style scoped>
.root {
  margin-top: 40px;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow-y: auto;
}
.list {
  justify-content: center;
}

.list > li > a {
  color: #3a5a4f;
  font-weight: 500;
}

.active > a {
  font-weight: bold !important;
}
.text {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.topText {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 800px;
  max-width: 800px;
}

.mailto {
  color: inherit;
}

.title {
  margin-top: 30px;
  font-size: 200%;
  text-align: center;
}
</style>
