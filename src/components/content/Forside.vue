<template>
  <div class="forside col-lg-7">
    <h2 class="h1">{{ $t('vaelg-virksomhedsform.forside.title') }}</h2>
    <div class="mt-8" v-html="$t('vaelg-virksomhedsform.forside.manchet')" />
    <div class="mt-4">
      <button class="button button-primary" @click="$emit('start')">{{ $t('vaelg-virksomhedsform.forside.button') }}</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Forside'
};
</script>
