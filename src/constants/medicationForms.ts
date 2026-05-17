import type { ImageSourcePropType } from 'react-native';

import {
  MedicationForm,
  medicationForms,
} from '../interfaces/medication';

const medicationFormIcons: Record<MedicationForm, ImageSourcePropType> = {
  tablet: require('../assets/medication/tablet.png'),
  capsule: require('../assets/medication/capsule.png'),
  syrup: require('../assets/medication/syrup.png'),
  suspension: require('../assets/medication/suspension.png'),
  solution: require('../assets/medication/solution.png'),
  rinse: require('../assets/medication/rinse.png'),
  gel: require('../assets/medication/gel.png'),
  spray: require('../assets/medication/spray.png'),
};

export const getMedicationFormIcon = (form: MedicationForm) =>
  medicationFormIcons[form];

export const getMedicationFormLabel = (form: MedicationForm) =>
  medicationForms.find(item => item.value === form)?.label ?? form;
