<template>
  <div>
    <h2 class="h1">{{ title }}</h2>
    <p class="mt-8">Resultatet er kun vejledende, og vi anbefaler, at du søger rådgivning inden stiftelse af et aktieselskab.</p>
    <h2>Væsentligste kendetegn ved A/S:</h2>
    <ul>
      <li><p>Én eller flere ejere, som er den eller de personer eller virksomheder, der ejer aktierne i virksomheden.</p></li>
      <li><p>Selvstændig juridisk enhed, hvor ejerne kun hæfter for deres indskudte kapital.</p></li>
      <li><p>Et A/S skal indskyde en startkapital på mindst 400.000 kr.</p></li>
      <li><p>Et A/S skal føre regnskab og indberette sin årsrapport digitalt.</p></li>
      <li>
        <p>Ifølge selskabsloven skal et A/S bl.a. føre ejerbog over samtlige ejere og panthavere samt registrere legale og reelle ejerforhold.</p>
      </li>
      <li><p>Ledelsen i et A/S skal bestå af en direktion en bestyrelse eller et tilsynsråd.&nbsp;</p></li>
      <li><p>Det koster 670 kr. at registrere et A/S.</p></li>
    </ul>
    <p>
      <a
        target="_blank"
        href="https://virksomhedsguiden.dk/content/artikler/virksomhedsformer/overblik_over_virksomhedsformer/aktieselskab_a_s/"
        rel="noopener noreferrer nofollow"
        >Læs mere om A/S</a
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
    <p>Hvis du vælger en personligt ejet virksomhed, fx en enkeltmandsvirksomhed, hæfter du for hele virksomhedens eventuelle gæld.</p>
    <p>
      Hvis du vælger et selskab, fx et aktieselskab, hæfter du kun med den kapital, der er indskudt i virksomheden. Til gengæld skal du leve op til
      flere krav i selskabsloven, blandt andet skal virksomhedens regnskab offentliggøres.
    </p>
    <p>Valg af virksomhedsform har også betydning for skat og fradrag.</p>
    <h3>Definitionen på selskabskapital</h3>
    <p>
      Selskabskapital er det beløb, der indskydes i virksomheden, og som ejerne skal betale ved eventuel konkurs. Hvis du vælger at starte et A/S,
      skal du indskyde mindst 400.000 kr. ved opstart. Selskabskapitalen kan bestå af både kontanter og andre værdier, fx produktionsmaskiner,
      inventar eller computersoftware.
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Enkeltmandsvirksomhed',

  data() {
    return {
      title: 'Det tyder på, at du kan overveje at starte et aktieselskab (A/S).'
    };
  },

  created() {
    this.$emit('emitPiwikEvent', this.title);
  }
};
</script>
