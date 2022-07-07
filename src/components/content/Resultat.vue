<!-- Indgangspunktet for sandkasse-applikationen. Direkte og indirekte importering af komponenter og stylesheets i denne klasse vil blive inkluderet i den endelig applikation. -->
<template>
  <div class="reultat col-lg-7">
    <h2 class="h1">Resultat</h2>
    <div class="mt-8">{{ answers }}</div>
  </div>
</template>

<script lang="ts">
import { GuideAnswer } from 'src/enums/guideAnswer.enum';
export default {
  name: 'Resultat',

  props: {
    answers: {
      type: Object as () => GuideAnswer[],
      required: true
    }
  }
};
</script>
