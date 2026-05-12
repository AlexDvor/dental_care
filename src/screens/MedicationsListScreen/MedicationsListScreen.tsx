import React, { useMemo, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import {
  getMedicationFormIcon,
  getMedicationFormLabel,
} from '../../constants/medicationForms';
import { Theme } from '../../constants/theme';
import {
  MedicationIntake,
  MedicationScheduleItem,
  TreatmentPlan,
} from '../../interfaces/medication';
import ScreenLayout from '../../layout/ScreenLayout';
import {
  dentalMedicationIntakes,
  dentalTreatmentPlans,
} from '../../mockData/dentalMedicationTreatment';
import { MedicationItem } from '../../ui/MedicationItem/MedicationItem';
import { getDateKey } from '../../utils/Date/getDateKey';
import { parseDateKey } from '../../utils/Date/parseDateKey';

import { styles } from './MedicationsListScreen.style';

const DAY_IN_MS = 24 * 60 * 60 * 1000;

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

const addDays = (date: string, days: number) => {
  const nextDate = parseDateKey(date);
  nextDate.setDate(nextDate.getDate() + days);
  return getDateKey(nextDate);
};

const getDaysBetween = (startDate: string, endDate: string) =>
  Math.floor(
    (parseDateKey(endDate).getTime() - parseDateKey(startDate).getTime()) /
      DAY_IN_MS,
  ) + 1;

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
  }).format(parseDateKey(date));

const getDoseText = (plan: TreatmentPlan) =>
  `${plan.strength} · ${plan.doseAmount} ${getMedicationFormLabel(
    plan.form,
  ).toLowerCase()}`;

const buildSchedule = (
  plans: TreatmentPlan[],
  intakes: MedicationIntake[],
): MedicationScheduleItem[] =>
  plans
    .filter(plan => plan.status === 'active')
    .flatMap(plan => {
      const daysCount = getDaysBetween(plan.startDate, plan.endDate);

      return Array.from({ length: daysCount }).flatMap((_, dayIndex) => {
        const scheduledDate = addDays(plan.startDate, dayIndex);

        return plan.times.map(time => {
          const intake = intakes.find(
            item =>
              item.treatmentPlanId === plan.id &&
              item.scheduledDate === scheduledDate &&
              item.scheduledTime === time,
          );
          const status: MedicationScheduleItem['status'] =
            intake?.status ?? 'pending';

          return {
            id: `${plan.id}-${scheduledDate}-${time}`,
            treatmentPlanId: plan.id,
            scheduledDate,
            scheduledAt: `${scheduledDate}T${time}:00.000Z`,
            name: plan.medicationName,
            dose: getDoseText(plan),
            time,
            taken: status === 'taken',
            form: plan.form,
            status,
          };
        });
      });
    })
    .sort((a, b) => a.scheduledAt.localeCompare(b.scheduledAt));

const getTreatmentRange = (plans: TreatmentPlan[]) => {
  const startDate = plans.reduce(
    (earliest, plan) => (plan.startDate < earliest ? plan.startDate : earliest),
    plans[0].startDate,
  );
  const endDate = plans.reduce(
    (latest, plan) => (plan.endDate > latest ? plan.endDate : latest),
    plans[0].endDate,
  );

  return { startDate, endDate };
};

const createTakenIntake = (item: MedicationScheduleItem): MedicationIntake => ({
  id: `intake-${item.id}`,
  treatmentPlanId: item.treatmentPlanId,
  scheduledDate: item.scheduledDate,
  scheduledTime: item.time,
  scheduledAt: item.scheduledAt,
  status: 'taken',
  takenAt: new Date().toISOString(),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});

export default function MedicationsListScreen({ navigation }: any) {
  const today = getDateKey(new Date());
  const [intakes, setIntakes] = useState<MedicationIntake[]>(
    dentalMedicationIntakes,
  );
  const [showFullTreatment, setShowFullTreatment] = useState(false);

  const treatmentRange = useMemo(
    () => getTreatmentRange(dentalTreatmentPlans),
    [],
  );

  const allSchedule = useMemo(
    () => buildSchedule(dentalTreatmentPlans, intakes),
    [intakes],
  );

  const todaySchedule = useMemo(
    () => allSchedule.filter(item => item.scheduledDate === today),
    [allSchedule, today],
  );

  const { taken, total } = useMemo(
    () => ({
      taken: todaySchedule.filter(m => m.taken).length,
      total: todaySchedule.length,
    }),
    [todaySchedule],
  );

  const treatmentDays = getDaysBetween(
    treatmentRange.startDate,
    treatmentRange.endDate,
  );
  const currentTreatmentDay = Math.min(
    Math.max(getDaysBetween(treatmentRange.startDate, today), 1),
    treatmentDays,
  );
  const treatmentProgress = Math.round(
    (currentTreatmentDay / treatmentDays) * 100,
  );

  const markAsTaken = (id: string) => {
    const scheduleItem = todaySchedule.find(item => item.id === id);

    if (!scheduleItem) {
      return;
    }

    setIntakes(prev => {
      const existingIntake = prev.find(
        item =>
          item.treatmentPlanId === scheduleItem.treatmentPlanId &&
          item.scheduledDate === scheduleItem.scheduledDate &&
          item.scheduledTime === scheduleItem.time,
      );

      if (!existingIntake) {
        return [...prev, createTakenIntake(scheduleItem)];
      }

      return prev.map(item =>
        item.id === existingIntake.id
          ? {
              ...item,
              status: 'taken',
              takenAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            }
          : item,
      );
    });
  };

  const renderFullScheduleItem = ({
    item,
    index,
  }: {
    item: MedicationScheduleItem;
    index: number;
  }) => {
    const previousItem = allSchedule[index - 1];
    const showDate = previousItem?.scheduledDate !== item.scheduledDate;

    return (
      <View>
        {showDate && (
          <Text style={styles.scheduleDate}>
            {formatDate(item.scheduledDate)}
          </Text>
        )}

        <View style={styles.scheduleCard}>
          <View style={styles.scheduleContent}>
            <View style={styles.scheduleIconWrap}>
              <Image
                style={styles.scheduleIcon}
                source={getMedicationFormIcon(item.form)}
              />
            </View>

            <View style={styles.scheduleText}>
              <Text style={styles.scheduleName}>{item.name}</Text>
              <Text style={styles.scheduleDose}>{item.dose}</Text>
            </View>
          </View>

          <View style={styles.scheduleMeta}>
            <Text style={styles.scheduleTime}>{item.time}</Text>
            <Text
              style={[
                styles.scheduleStatus,
                item.taken && styles.scheduleStatusTaken,
              ]}
            >
              {item.taken ? 'Taken' : 'Planned'}
            </Text>
          </View>
        </View>
      </View>
    );
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

      <Text style={styles.subtitle}>Post extraction treatment plan</Text>

      <View style={styles.treatmentCard}>
        <View style={styles.treatmentHeader}>
          <View>
            <Text style={styles.treatmentLabel}>Treatment period</Text>
            <Text style={styles.treatmentTitle}>
              {formatDate(treatmentRange.startDate)} -{' '}
              {formatDate(treatmentRange.endDate)}
            </Text>
          </View>

          <View style={styles.dayBadge}>
            <Text style={styles.dayBadgeText}>
              Day {currentTreatmentDay}/{treatmentDays}
            </Text>
          </View>
        </View>

        <Text style={styles.treatmentInfo}>
          Gingivitis care prescribed after tooth extraction
        </Text>

        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${treatmentProgress}%`,
              },
            ]}
          />
        </View>
      </View>

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

      <Text style={styles.sectionLabel}>
        {showFullTreatment ? 'Full treatment' : 'Today'}
      </Text>

      <FlatList
        data={showFullTreatment ? allSchedule : todaySchedule}
        keyExtractor={i => i.id}
        renderItem={({ item, index }) =>
          showFullTreatment ? (
            renderFullScheduleItem({ item, index })
          ) : (
            <MedicationItem
              item={item}
              index={index}
              isLast={index === todaySchedule.length - 1}
              previousTaken={todaySchedule[index - 1]?.taken ?? false}
              onTaken={markAsTaken}
            />
          )
        }
        ListFooterComponent={
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.toggleButton}
            onPress={() => setShowFullTreatment(prev => !prev)}
          >
            <Text style={styles.toggleButtonText}>
              {showFullTreatment
                ? "Show today's medications"
                : 'Show full treatment'}
            </Text>
          </TouchableOpacity>
        }
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </ScreenLayout>
  );
}
