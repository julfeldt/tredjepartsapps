<!-- Indgangspunktet for sandkasse-applikationen. Direkte og indirekte importering af komponenter og stylesheets i denne klasse vil blive inkluderet i den endelig applikation. -->
<template>
  <div class="applikation-container"><h1>@TNB: Implementér awesome guide</h1></div>
</template>

<script lang="ts">
import axios from 'axios';
import SvgIcons from './SvgIcons.vue';
import * as DKFDS from 'dkfds';
import * as DataEvent from '@erst-vg/piwik-event-wrapper';

export interface Variant {
  navn: string;
  aktiv: boolean;
  parametre: {
    parameternavn: string;
    parametervaerdi: string;
  }[];
}

export default {
  name: 'Applikation',
  components: {
    SvgIcons
  },
  props: {
    variant: {
      type: Object as () => Variant,
      default: null,
      required: false
    }
  },

  data() {
    return {
      response: {},
      error: false,
      pending: false,
      step: 1,
      maxStep: 3,
      reactiveKey: 1
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
  mounted() {
    this.callAPI();
    new DKFDS.Accordion(document.getElementById('accordion-element'));
  },
  created() {
    /**
     * Lyt på Vuex store ændringer, og opdater reactiveKey hver gang der committes en Vuex mutation. Man kan evt. bruge mutation type
     * til at styre om og hvornår den skal opdateres eller lytte på noget mere specifikt.
     */
    this.$store.subscribe(() => {
      this.reactiveKey++;
    });
    window.location.hash = '1';
    window.addEventListener('hashchange', this.updateStepFromHash);
  },
  destroyed() {
    window.addEventListener('hashchange', this.updateStepFromHash);
  },
  methods: {
    callAPI(fail = false) {
      this.pending = true;
      this.error = false;
      const id = fail ? 'NaN' : 1;
      axios
        .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(({ data }) => {
          // Vil sørge for response data vises i DOM
          this.response = data;
        })
        .catch(() => {
          // vil sørge for fejlbeskeder vises i DOM
          this.error = true;
        })
        .finally(() => {
          // vil sørge for loading spinner skjules
          this.pending = false;
        });
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
  },
  provide() {
    // Gør 'reactiveKey' tilgængelig for underkomponenter (uanset dybde), som kan bruges til at sørge for Vuex getters er reaktive.
    const reactiveKey = {};
    Object.defineProperty(reactiveKey, 'value', {
      enumerable: true,
      get: () => this.reactiveKey
    });
    return {
      reactiveKey
    };
  }
};
</script>
<style lang="scss" scoped>
@import '../styles/components/_applikation.scss';
</style>
