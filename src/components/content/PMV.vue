<template>
  <div>
    <h2 class="h1">{{ title }}</h2>
    <p class="mt-8">
      Vær opmærksom på, at hvis du tjener under 50.000 kr. om året, er du ikke forpligtet til at registrere en virksomhed. Dog kan en PMV være en
      mulighed, hvis du fx ønsker et CVR-nummer.
    </p>
    <h2>Væsentligste kendetegn ved PMV:</h2>
    <ul>
      <li><p>Kun én ejer, der alene træffer alle beslutninger.</p></li>
      <li><p>Ejeren hæfter personligt med egen formue.</p></li>
      <li><p>Ingen kapitalkrav.</p></li>
      <li><p>Virksomheden&nbsp;er ikke momspligtig (omsætning under 50.000 kr. årligt).</p></li>
      <li><p>Virksomheden har ikke import fra eller eksport til lande uden for EU.</p></li>
      <li><p>Virksomheden har ikke ansatte.</p></li>
      <li><p>Gratis at registrere.</p></li>
      <li><p>Registreringen skal fornys hvert 3. år.</p></li>
      <li><p>Du kan kun have én PMV.</p></li>
    </ul>
    <p>
      <a
        target="_blank"
        href="https://virksomhedsguiden.dk/content/artikler/virksomhedsformer/overblik_over_virksomhedsformer/personligt_ejet_mindre_virksomhed_pmv/"
        rel="noopener noreferrer nofollow"
        >Læs mere om PMV</a
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
      Nogle virksomhedsformer kan kun have én ejer, fx PMV’er, mens fx selskaber enten kan have én eller flere ejere. Andre virksomhedsformer skal
      have flere ejere, fx interessentskaber.&nbsp;
    </p>
    <h3>Forskellen på at hæfte personligt eller ej</h3>
    <p>Hvis du vælger en personligt ejet virksomhed, fx en PMV, hæfter du for hele virksomhedens eventuelle gæld.</p>
    <p>
      Hvis du vælger et selskab, fx et anpartsselskab, hæfter du kun med den kapital, der er indskudt i virksomheden. Til gengæld skal du leve op til
      flere krav i selskabsloven, blandt andet skal virksomhedens regnskab offentliggøres.
    </p>
    <p>Valg af virksomhedsform har også betydning for skat og fradrag.</p>
    <h3>Konsekvenserne af at omsætte for over eller under 50.000 kr. om året</h3>
    <ul>
      <li>
        <p>
          <strong>Over 50.000 kr. om året</strong><br />Hvis din virksomhed skal omsætte for mere end 50.000 kr. om året, skal du have et CVR-nummer
          og momsregistreres for blandt andet at kunne indberette moms og betale punktafgifter.
        </p>
      </li>
    </ul>
    <ul>
      <li>
        <p>
          <strong>Under 50.000 kr. om året</strong><br />Hvis du ikke regner med at skulle omsætte for mere end 50.000 kr. om året, behøver du som
          udgangspunkt ikke at lave momsregnskab og indberette moms.
        </p>
      </li>
    </ul>
    <p>Vær opmærksom på, at en række ydelser som udgangspunkt er fritaget for moms, hvis bestemte betingelser er opfyldt.</p>
    <p>
      <a
        target="_blank"
        href="https://virksomhedsguiden.dk/content/artikler/skat_og_moms/moms_og_loensumsafgift/momsfritagelse_og_loensumsafgift/"
        rel="noopener noreferrer nofollow"
        >Læs mere om momsfritagelse og lønsumsafgift</a
      >
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Enkeltmandsvirksomhed',

  data() {
    return {
      title: 'Det tyder på, at du kan overveje at starte en personligt ejet mindre virksomhed (PMV).'
    };
  },

  created() {
    this.$emit('emitPiwikEvent', this.title);
  }
};
</script>
