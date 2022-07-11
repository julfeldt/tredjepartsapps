<template>
  <div>
    <h2 class="h1">{{ title }}</h2>
    <p class="mt-8">Væsentligste kendetegn ved interessentskaber:</p>
    <ul>
      <li><p>Mindst to ejere, der kan være både personer og virksomheder.</p></li>
      <li><p>Ejerne hæfter personligt, solidarisk og ubegrænset.</p></li>
      <li><p>Pligt til at registrere oplysninger om selskabets reelle ejere.</p></li>
      <li><p>Ingen kapitalkrav.</p></li>
      <li><p>Ingen pligt til at indsende årsrapport, hvis én af interessenterne er en person.</p></li>
      <li><p>Pligt til at indsende årsrapport, hvis alle interessenter er selskaber eller lignende.</p></li>
    </ul>
    <p>
      <a
        target="_blank"
        href="https://virksomhedsguiden.dk/content/artikler/virksomhedsformer/overblik_over_virksomhedsformer/interessentskab_i_s/"
        rel="noopener noreferrer nofollow"
        >Læs mere om I/S</a
      >
    </p>
    <p>
      <a
        target="_blank"
        href="https://virksomhedsguiden.dk/content/ydelser/faa-overblik-over-virksomhedsformer/1669d3e5-d022-4c85-99b4-e4369c235593/"
        rel="noopener noreferrer nofollow"
        >Se overblik over virksomhedsformer</a
      >
    </p>
    <h2>Hvilke konsekvenser har mine valg?</h2>
    <h3>Antallet af ejere i virksomheden har betydning for valget af virksomhedsform</h3>
    <p>
      Nogle virksomhedsformer kan kun have én ejer, fx enkeltmandsvirksomheder, mens fx selskaber enten kan have én eller flere ejere. Andre
      virksomhedsformer skal have flere ejere, fx interessentskaber.&nbsp;
    </p>
    <h3>Forskellen på at hæfte personligt eller ej</h3>
    <p>Hvis du vælger en personligt ejet virksomhed, fx et interessentskab, hæfter du for hele virksomhedens eventuelle gæld.</p>
    <p>
      Hvis du vælger et selskab, fx et anpartsselskab, hæfter du kun med den kapital, der er indskudt i virksomheden. Til gengæld skal du leve op til
      flere krav i selskabsloven, blandt andet skal virksomhedens regnskab offentliggøres.
    </p>
    <p>Valg af virksomhedsform har også betydning for skat og fradrag.</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Enkeltmandsvirksomhed',

  data() {
    return {
      title: 'Det tyder på, at du kan overveje at starte et interessentskab (I/S).'
    };
  },

  created() {
    this.$emit('emitPiwikEvent', this.title);
  }
};
</script>
