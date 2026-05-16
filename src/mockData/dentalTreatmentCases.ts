import { MedicationForm } from '../interfaces/medication';

export type DentalTreatmentMedicationTemplate = {
  id: string;
  title: string;
  medicationName: string;
  strength: string;
  doseAmount: string;
  form: MedicationForm;
  durationDays: number;
  times: string[];
  instructions: string;
};

export type DentalTreatmentCase = {
  diagnosis: string;
  description: string;
  procedures: string[];
  toothNumbers: string[];
  notes: string;
  medications: DentalTreatmentMedicationTemplate[];
};

export const dentalTreatmentCases = {
  acuteGingivitis: {
    diagnosis: 'Acute gingivitis',
    description:
      'Inflamed and bleeding gums with local soreness around the lower molars.',
    procedures: [
      'Gum inflammation assessment',
      'Professional plaque removal',
      'Oral hygiene instruction',
    ],
    toothNumbers: ['36', '37', '46', '47'],
    notes:
      'Gums are swollen and bleed on probing. No deep periodontal pockets were found. Patient should avoid aggressive brushing and return if pain or swelling increases.',
    medications: [
      {
        id: 'chlorhexidine-rinse',
        title: 'Antiseptic gum rinse',
        medicationName: 'Chlorhexidine rinse',
        strength: '0.12%',
        doseAmount: '15 ml',
        form: 'rinse',
        durationDays: 10,
        times: ['09:00', '21:00'],
        instructions:
          'Rinse for 30 seconds after brushing. Do not swallow. Avoid food or drink for 30 minutes after use.',
      },
      {
        id: 'ibuprofen',
        title: 'Inflammation and pain control',
        medicationName: 'Ibuprofen',
        strength: '200 mg',
        doseAmount: '1',
        form: 'tablet',
        durationDays: 3,
        times: ['14:00'],
        instructions:
          'Take after food only if soreness is present. Stop taking it if stomach discomfort appears.',
      },
    ],
  },
  postExtractionInflammation: {
    diagnosis: 'Post extraction gum inflammation',
    description:
      'Soft tissue inflammation after tooth extraction with moderate swelling.',
    procedures: [
      'Extraction site review',
      'Socket irrigation',
      'Post operative care instruction',
    ],
    toothNumbers: ['38'],
    notes:
      'Extraction socket is healing, but surrounding gum tissue is inflamed. Patient should keep the area clean and avoid smoking during recovery.',
    medications: [
      {
        id: 'amoxicillin',
        title: 'Post extraction antibiotic course',
        medicationName: 'Amoxicillin',
        strength: '500 mg',
        doseAmount: '1',
        form: 'capsule',
        durationDays: 7,
        times: ['08:00', '20:00'],
        instructions:
          'Take after meals and complete the full course unless the doctor advises otherwise.',
      },
      {
        id: 'chlorhexidine-rinse',
        title: 'Extraction site antiseptic rinse',
        medicationName: 'Chlorhexidine rinse',
        strength: '0.12%',
        doseAmount: '15 ml',
        form: 'rinse',
        durationDays: 7,
        times: ['09:00', '21:00'],
        instructions:
          'Start rinsing gently 24 hours after extraction. Do not rinse aggressively.',
      },
    ],
  },
  mucosalInflammation: {
    diagnosis: 'Oral mucosal inflammation',
    description:
      'Irritated oral mucosa with localized redness and burning sensation.',
    procedures: [
      'Oral mucosa examination',
      'Irritation source assessment',
      'Diet and hygiene guidance',
    ],
    toothNumbers: ['Oral mucosa'],
    notes:
      'Localized irritation is present on the cheek mucosa. No signs of spreading infection. Patient should avoid spicy food and alcohol-based mouthwash.',
    medications: [
      {
        id: 'anti-inflammatory-gel',
        title: 'Local mucosal anti-inflammatory care',
        medicationName: 'Benzydamine gel',
        strength: '0.15%',
        doseAmount: 'thin layer',
        form: 'gel',
        durationDays: 5,
        times: ['08:00', '14:00', '20:00'],
        instructions:
          'Apply a thin layer to the irritated area after meals. Avoid eating or drinking for 20 minutes after application.',
      },
      {
        id: 'saline-rinse',
        title: 'Gentle soothing rinse',
        medicationName: 'Saline rinse',
        strength: '0.9%',
        doseAmount: '15 ml',
        form: 'rinse',
        durationDays: 5,
        times: ['10:00', '22:00'],
        instructions:
          'Rinse gently. Do not swallow. Use after brushing and before bedtime.',
      },
    ],
  },
} satisfies Record<string, DentalTreatmentCase>;

export type DentalTreatmentCaseKey = keyof typeof dentalTreatmentCases;
