import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { getMedicationFormIcon } from '../../constants/medicationForms';
import { Theme } from '../../constants/theme';
import { useMedicationSchedule } from '../../hook/useMedicationSchedule';
import { MedicationScheduleItem } from '../../interfaces/medication';
import ScreenLayout from '../../layout/ScreenLayout';
import { BackHeader } from '../../ui/BackIcon/BackHeader';
import { MedicationItem } from '../../ui/MedicationItem/MedicationItem';
import { parseDateKey } from '../../utils/Date/parseDateKey';

import { styles } from './MedicationsListScreen.style';

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
  }).format(parseDateKey(date));

export default function MedicationsListScreen() {
  const [showFullTreatment, setShowFullTreatment] = useState(false);
  const {
    allSchedule,
    currentTreatmentDay,
    hasActiveTreatmentPlan,
    isLoading,
    markAsTaken,
    todayProgress,
    todaySchedule,
    treatmentDays,
    treatmentProgress,
    treatmentRange,
  } = useMedicationSchedule();

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

  if (isLoading) {
    return (
      <ScreenLayout
        statusBarBackgroundColor={Theme.colors.statusBar.secondary}
        statusBarStyle="light-content"
        defaultPadding
      >
        <BackHeader title="Medications" />

        <View style={styles.centeredState}>
          <ActivityIndicator color={Theme.colors.background.accent} />
        </View>
      </ScreenLayout>
    );
  }

  if (!hasActiveTreatmentPlan) {
    return (
      <ScreenLayout
        statusBarBackgroundColor={Theme.colors.statusBar.secondary}
        statusBarStyle="light-content"
        defaultPadding
      >
        <BackHeader title="Medications" />

        <View style={styles.centeredState}>
          <Text style={styles.emptyTitle}>No active medication plan</Text>
          <Text style={styles.emptyText}>
            Medication plans from your doctor will appear here.
          </Text>
        </View>
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout
      statusBarBackgroundColor={Theme.colors.statusBar.secondary}
      statusBarStyle="light-content"
      defaultPadding
    >
      <BackHeader title="Medications" />

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
            {todayProgress.taken} / {todayProgress.total}
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
                (2 * Math.PI * 44 * todayProgress.taken) /
                Math.max(todayProgress.total, 1)
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
