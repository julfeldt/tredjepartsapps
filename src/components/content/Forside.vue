<template>
  <div class="forside col-lg-7">
    <h2 class="h1">{{ title }}</h2>
    <div class="mt-8">
      Svar på 3 spørgsmål, og få en vurdering af, hvilken virksomhedsform du kan vælge.
      <br /><br />
      Guiden er kun vejledende, og vi anbefaler, at du søger råd og vejledning, når du er i tvivl.
    </div>
    <div class="mt-4">
      <button class="button button-primary" @click="$emit('start')">Næste</button>
    </div>
  </div>
</template>

<script lang="ts">
import { GuideStep } from '../../enums/guideStep.enum';
import { titles } from '../../utils/title.util';

export default {
  name: 'Forside',

  data() {
    return {
      title: titles[GuideStep.FORSIDE]
    };
  }
};
</script>
