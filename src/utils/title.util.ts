import { GuideStep } from '../enums/guideStep.enum';

export const titles: { [key in GuideStep]: string } = {
  [GuideStep.FORSIDE]: 'vaelg-virksomhedsform.forside.title',
  [GuideStep.STEP_1]: 'vaelg-virksomhedsform.sporgsmaal.step-1.title',
  [GuideStep.STEP_2_EN]: 'vaelg-virksomhedsform.sporgsmaal.step-2-en.title',
  [GuideStep.STEP_2_FLERE]: 'vaelg-virksomhedsform.sporgsmaal.step-2-flere.title',
  [GuideStep.STEP_3_JA]: 'vaelg-virksomhedsform.sporgsmaal.step-3-en.title',
  [GuideStep.STEP_3_NEJ]: 'vaelg-virksomhedsform.sporgsmaal.step-3-flere.title',
  [GuideStep.RESULTAT]: 'vaelg-virksomhedsform.resultat.title'
};
