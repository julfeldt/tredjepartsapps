<!-- Indgangspunktet for sandkasse-applikationen. Direkte og indirekte importering af komponenter og stylesheets i denne klasse vil blive inkluderet i den endelig applikation. -->
<template>
  <div class="row">
    <div class="col-12">
      <Forside v-if="currentStep === guideStep.FORSIDE" @start="start" />
      <Resultat v-else-if="currentStep === guideStep.RESULTAT" :answers="answers" />
      <Step v-else :key="currentStep" :step="currentStep" @back="stepBack" @forward="stepForward" />
    </div>
  </div>
</template>

<script lang="ts">
import * as DataEvent from '@erst-vg/piwik-event-wrapper';
import Forside from './content/Forside.vue';
import Resultat from './content/Resultat.vue';
import Step from './content/Step.vue';
import { GuideStep } from '../enums/guideStep.enum';
import { GuideAnswer } from '../enums/guideAnswer.enum';

export default {
  name: 'Applikation',
  components: {
    Forside,
    Resultat,
    Step
  },

  data() {
    return {
      currentStep: GuideStep.FORSIDE,
      guideStep: GuideStep,
      steps: [],
      answers: [],
      stepGraph: {
        [GuideStep.STEP_1]: { [GuideAnswer.FIRST]: GuideStep.STEP_2_EN, [GuideAnswer.SECOND]: GuideStep.STEP_2_FLERE },
        [GuideStep.STEP_2_EN]: { [GuideAnswer.FIRST]: GuideStep.STEP_3_JA, [GuideAnswer.SECOND]: GuideStep.STEP_3_NEJ },
        [GuideStep.STEP_2_FLERE]: { [GuideAnswer.FIRST]: GuideStep.RESULTAT, [GuideAnswer.SECOND]: GuideStep.STEP_3_NEJ },
        [GuideStep.STEP_3_JA]: { [GuideAnswer.FIRST]: GuideStep.RESULTAT, [GuideAnswer.SECOND]: GuideStep.RESULTAT },
        [GuideStep.STEP_3_NEJ]: { [GuideAnswer.FIRST]: GuideStep.RESULTAT, [GuideAnswer.SECOND]: GuideStep.RESULTAT }
      }
    };
  },

  computed: {
    variantColor: function () {
      return this.variant?.parametre[0].parametervaerdi ?? '#C0C0C0';
    },
    variantName: function () {
      return this.variant?.navn ?? 'default';
    }
  },
  methods: {
    start() {
      this.steps.push(GuideStep.FORSIDE);
      this.currentStep = GuideStep.STEP_1;
    },
    stepBack() {
      this.currentStep = (this.steps as GuideStep[]).pop() ?? GuideStep.FORSIDE;
      (this.answers as GuideAnswer[]).pop();
    },
    stepForward(answer: GuideAnswer) {
      (this.steps as GuideStep[]).push(this.currentStep);
      (this.answers as GuideAnswer[]).push(answer);
      this.currentStep = this.stepGraph[this.currentStep][answer];
    },
    decreaseStep() {
      if (window.location.hash !== '#1') {
        const { hash, pathname } = window.location;
        const previousHash = String(parseInt(this.removeHash(hash), 10) - 1);
        const previousUrl = pathname + '#' + previousHash;
        DataEvent.emitForrigeEvent(this, previousUrl);
        window.location.hash = previousHash;
      }
    },
    increaseStep() {
      if (window.location.hash !== '#' + this.maxStep) {
        const { hash, pathname } = window.location;
        const previousHash = String(parseInt(this.removeHash(hash), 10) + 1);
        const nextUrl = pathname + '#' + previousHash;
        DataEvent.emitNaesteEvent(this, nextUrl);
        window.location.hash = previousHash;
      }
    },
    updateStepFromHash() {
      const { hash } = window.location;
      this.step = hash ? parseInt(this.removeHash(hash), 10) : 1;
      DataEvent.emitPageViewEvent(this);
    },
    removeHash(hash: string) {
      return hash.replaceAll('#', '');
    },
    // Data opsamlingsmetoder
    emitDownloadEvent() {
      DataEvent.emitDownloadEvent(this, 'doc.pfd', 'download data');
    },
    emitCTAClickEvent() {
      DataEvent.emitCTAClickEvent(this, 'eventType', 'CTA data');
    },
    emitFritekstEvent() {
      const data = {
        step: this.step,
        maxStep: this.maxStep
      };
      DataEvent.emitFritekstEvent(this, 'eventType', JSON.stringify(data));
    }
  }
};
</script>
