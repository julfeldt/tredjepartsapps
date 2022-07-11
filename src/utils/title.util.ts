import { GuideStep } from '../enums/guideStep.enum';

export const titles: { [key in GuideStep]: string } = {
  [GuideStep.FORSIDE]: 'Guide: Vælg virksomhedsform',
  [GuideStep.STEP_1]: '1. Hvor mange ejere skal din virksomhed have?',
  [GuideStep.STEP_2_EN]: '2. Vil du hæfte personligt for virksomhedens eventuelle gæld?',
  [GuideStep.STEP_2_FLERE]: '2. Vil I hæfte personligt for virksomhedens eventuelle gæld?',
  [GuideStep.STEP_3_JA]: '3. Forventer du, at virksomheden skal omsætte for mere end 50.000 kr. om året?',
  [GuideStep.STEP_3_NEJ]: '3. Hvor stort et beløb kan du indskyde som selskabskapital?',
  [GuideStep.RESULTAT]: ''
};
