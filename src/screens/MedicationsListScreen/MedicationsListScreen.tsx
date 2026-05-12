import React, { useMemo, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import { Theme } from '../../constants/theme';
import { MedicationType } from '../../interfaces/medication';
import ScreenLayout from '../../layout/ScreenLayout';
import { MedicationItem } from '../../ui/MedicationItem/MedicationItem';

import { styles } from './MedicationsListScreen.style';

const INITIAL: MedicationType[] = [
  {
    id: '1',
    name: 'Vitamin D3',
    dose: '1000 IU · 1 tablet',
    time: '08:00',
    taken: true,
  },
  {
    id: '2',
    name: 'Amoxicillin',
    dose: '500 mg · 1 capsule',
    time: '14:00',
    taken: false,
  },
  {
    id: '3',
    name: 'Ibuprofen',
    dose: '200 mg · 1 tablet',
    time: '18:00',
    taken: false,
  },
  {
    id: '4',
    name: 'Magnesium',
    dose: '400 mg · 1 tablet',
    time: '21:00',
    taken: false,
  },
];

const BackIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path
      d="M15 6l-6 6 6 6"
      stroke={Theme.colors.text.primary}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default function MedicationsListScreen({ navigation }: any) {
  const [meds, setMeds] = useState<MedicationType[]>(INITIAL);

  const { taken, total } = useMemo(
    () => ({
      taken: meds.filter(m => m.taken).length,
      total: meds.length,
    }),
    [meds],
  );

  const markAsTaken = (id: string) => {
    setMeds(prev => prev.map(m => (m.id === id ? { ...m, taken: true } : m)));
  };

  return (
    <ScreenLayout
      statusBarBackgroundColor={Theme.colors.statusBar.secondary}
      statusBarStyle="light-content"
      defaultPadding
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <BackIcon />
        </TouchableOpacity>

        <Text style={styles.title}>Medications</Text>
      </View>

      <Text style={styles.subtitle}>Today's schedule</Text>

      <View style={styles.summaryCard}>
        <View>
          <Text style={styles.summaryLabel}>Taken today</Text>

          <Text style={styles.summaryValue}>
            {taken} / {total}
          </Text>
        </View>

        <View style={styles.summaryRight}>
          <Svg width={56} height={56} viewBox="0 0 100 100">
            <Circle
              cx="50"
              cy="50"
              r="44"
              stroke={Theme.colors.background.neutralWhite}
              strokeWidth={8}
              fill="none"
            />

            <Circle
              cx="50"
              cy="50"
              r="44"
              stroke={Theme.colors.text.inverted}
              strokeWidth={8}
              strokeLinecap="round"
              fill="none"
              strokeDasharray={`${
                (2 * Math.PI * 44 * taken) / Math.max(total, 1)
              } ${2 * Math.PI * 44}`}
              transform="rotate(-90 50 50)"
            />
          </Svg>
        </View>
      </View>

      <Text style={styles.sectionLabel}>Today</Text>

      <FlatList
        data={meds}
        keyExtractor={i => i.id}
        renderItem={({ item, index }) => (
          <MedicationItem
            item={item}
            index={index}
            isLast={index === meds.length - 1}
            previousTaken={meds[index - 1]?.taken ?? false}
            onTaken={markAsTaken}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </ScreenLayout>
  );
}
