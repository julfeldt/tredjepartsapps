<template>
  <div class="reultat col-lg-7">
    <a href="" @click="$emit('reset')">
      <svg class="icon-svg">
        <use xlink:href="#arrow-left" /></svg
      >Start forfra</a
    >
    <component :is="component" @emitPiwikEvent="emitPiwikEvent" />
    <button class="button button-tertiary" @click="$emit('reset')">Start forfra</button>
  </div>
</template>

<script lang="ts">
import { GuideAnswer } from '../../enums/guideAnswer.enum';
import Enkeltmandsvirksomhed from './Enkeltmandsvirksomhed.vue';
import PMV from './PMV.vue';
import ApS from './ApS.vue';
import AS from './AS.vue';
import IS from './IS.vue';
import { PropType } from 'vue';

export default {
  name: 'Resultat',
  components: {
    Enkeltmandsvirksomhed,
    PMV,
    ApS,
    AS,
    IS
  },

  props: {
    answers: {
      type: Object as PropType<GuideAnswer[]>,
      required: true
    }
  },

  computed: {
    component() {
      switch (JSON.stringify(this.answers)) {
        case JSON.stringify([GuideAnswer.FIRST, GuideAnswer.FIRST, GuideAnswer.FIRST]):
          return 'Enkeltmandsvirksomhed';
        case JSON.stringify([GuideAnswer.FIRST, GuideAnswer.FIRST, GuideAnswer.SECOND]):
          return 'PMV';
        case JSON.stringify([GuideAnswer.FIRST, GuideAnswer.SECOND, GuideAnswer.FIRST]):
          return 'ApS';
        case JSON.stringify([GuideAnswer.FIRST, GuideAnswer.SECOND, GuideAnswer.SECOND]):
          return 'AS';
        case JSON.stringify([GuideAnswer.SECOND, GuideAnswer.FIRST]):
          return 'IS';
        case JSON.stringify([GuideAnswer.SECOND, GuideAnswer.SECOND, GuideAnswer.FIRST]):
          return 'ApS';
        case JSON.stringify([GuideAnswer.SECOND, GuideAnswer.SECOND, GuideAnswer.SECOND]):
          return 'AS';
        default:
          return 'Enkeltmandsvirksomhed';
      }
    }
  },

  methods: {
    emitPiwikEvent(title: string) {
      this.$emit('emitPiwikEvent', title);
    }
  }
};
</script>
