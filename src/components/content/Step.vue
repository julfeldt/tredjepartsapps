<template>
  <div class="step col-lg-7">
    <h2 class="h1">{{ titles[step] }}</h2>
    <div class="form-group mt-8">
      <fieldset>
        <ul class="nobullet-list">
          <div class="form-group-radio">
            <li v-for="answer in guideAnswer" :id="`li-${answer}`" :key="answer" class="mt-3">
              <input :id="`radio-${answer}`" type="radio" name="radio" :value="answer" class="form-radio radio-large" @click="chosen = answer" />
              <label :for="`radio-${answer}`">{{ answers[step][answer] }}</label>
              <div v-if="alerts[step][answer] && chosen === answer" role="alert" class="alert alert-info">
                <div class="alert-body">
                  <p class="alert-text">{{ alerts[step][answer] }}</p>
                </div>
              </div>
            </li>
          </div>
        </ul>
      </fieldset>
    </div>
    <div class="mt-4">
      <button class="button button-tertiary" @click="$emit('back')">Tilbage</button>
      <button class="button button-primary" :disabled="!chosen" @click="$emit('forward', chosen)">Næste</button>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { GuideAnswer } from '../../enums/guideAnswer.enum';
import { GuideStep } from '../../enums/guideStep.enum';
import { titles } from '../../utils/title.util';

export default {
  name: 'Step',

  props: {
    step: {
      type: Object as PropType<GuideStep>,
      required: true
    }
  },

  data() {
    return {
      chosen: null,
      guideAnswer: GuideAnswer,
      titles,
      answers: {
        [GuideStep.STEP_1]: {
          [GuideAnswer.FIRST]: 'Jeg skal eje virksomheden alene',
          [GuideAnswer.SECOND]: 'Vi skal være flere ejere'
        },
        [GuideStep.STEP_2_EN]: {
          [GuideAnswer.FIRST]: 'Ja',
          [GuideAnswer.SECOND]: 'Nej'
        },
        [GuideStep.STEP_2_FLERE]: {
          [GuideAnswer.FIRST]: 'Ja',
          [GuideAnswer.SECOND]: 'Nej'
        },
        [GuideStep.STEP_3_JA]: {
          [GuideAnswer.FIRST]: 'Ja',
          [GuideAnswer.SECOND]: 'Nej'
        },
        [GuideStep.STEP_3_NEJ]: {
          [GuideAnswer.FIRST]: 'Mellem 40.000 og 399.999 kr.',
          [GuideAnswer.SECOND]: '400.000 kr. eller mere'
        }
      },
      alerts: {
        [GuideStep.STEP_1]: {
          [GuideAnswer.FIRST]: '',
          [GuideAnswer.SECOND]: ''
        },
        [GuideStep.STEP_2_EN]: {
          [GuideAnswer.FIRST]: 'Ja. Du risikerer personligt at skulle betale virksomhedens eventuelle gæld.',
          [GuideAnswer.SECOND]: 'Nej. Dette medfører flere krav fra det offentlige, fx skal din virksomheds regnskab offentliggøres.'
        },
        [GuideStep.STEP_2_FLERE]: {
          [GuideAnswer.FIRST]: 'Ja. I risikerer personligt at skulle betale virksomhedens gæld.',
          [GuideAnswer.SECOND]: 'Nej. Dette medfører flere krav fra det offentlige, fx skal virksomhedens regnskab offentliggøres.'
        },
        [GuideStep.STEP_3_JA]: {
          [GuideAnswer.FIRST]: '',
          [GuideAnswer.SECOND]: ''
        },
        [GuideStep.STEP_3_NEJ]: {
          [GuideAnswer.FIRST]: '',
          [GuideAnswer.SECOND]: ''
        }
      }
    };
  }
};
</script>
