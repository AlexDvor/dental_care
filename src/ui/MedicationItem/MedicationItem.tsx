import React, { memo, useCallback, useMemo, useRef } from 'react';
import {
  Animated,
  Image,
  PanResponder,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { MedicationType } from '../../interfaces/medication';

import { styles } from './MedicationItem.style';

const SWIPE_COMPLETE_DISTANCE = -72;
const SWIPE_LIMIT = -96;
const LONG_PRESS_DURATION = 3000;

const CheckIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Path
      d="M5 12.5l4.5 4.5L19 7.5"
      stroke="#FFFFFF"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

type MedicationItemProps = {
  item: MedicationType;
  index: number;
  isLast: boolean;
  previousTaken: boolean;
  onTaken: (id: string) => void;
};

export const MedicationItem = memo(
  ({ item, index, isLast, previousTaken, onTaken }: MedicationItemProps) => {
    const translateX = useRef(new Animated.Value(0)).current;
    const holdProgress = useRef(new Animated.Value(0)).current;

    const resetPosition = useCallback(() => {
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
        speed: 18,
        bounciness: 6,
      }).start();
    }, [translateX]);

    const resetHoldProgress = useCallback(() => {
      holdProgress.stopAnimation();
      holdProgress.setValue(0);
    }, [holdProgress]);

    const completeTaking = useCallback(() => {
      if (item.taken) {
        resetPosition();
        return;
      }

      Vibration.vibrate(80);
      onTaken(item.id);
      resetPosition();
      resetHoldProgress();
    }, [item.id, item.taken, onTaken, resetHoldProgress, resetPosition]);

    const startHoldProgress = useCallback(() => {
      if (item.taken) {
        return;
      }

      holdProgress.setValue(0);
      Animated.timing(holdProgress, {
        toValue: 1,
        duration: LONG_PRESS_DURATION,
        useNativeDriver: false,
      }).start(({ finished }) => {
        if (finished) {
          completeTaking();
        }
      });
    }, [completeTaking, holdProgress, item.taken]);

    const cancelHoldProgress = useCallback(() => {
      if (!item.taken) {
        resetHoldProgress();
      }
    }, [item.taken, resetHoldProgress]);

    const panResponder = useMemo(
      () =>
        PanResponder.create({
          onMoveShouldSetPanResponder: (_, gestureState) => {
            const isHorizontalSwipe =
              Math.abs(gestureState.dx) > 12 &&
              Math.abs(gestureState.dx) > Math.abs(gestureState.dy) * 1.5;

            return !item.taken && gestureState.dx < 0 && isHorizontalSwipe;
          },
          onPanResponderGrant: resetHoldProgress,
          onPanResponderMove: (_, gestureState) => {
            translateX.setValue(Math.max(gestureState.dx, SWIPE_LIMIT));
          },
          onPanResponderRelease: (_, gestureState) => {
            if (gestureState.dx <= SWIPE_COMPLETE_DISTANCE) {
              Animated.timing(translateX, {
                toValue: SWIPE_LIMIT,
                duration: 120,
                useNativeDriver: true,
              }).start(completeTaking);
              return;
            }

            resetPosition();
          },
          onPanResponderTerminate: resetPosition,
        }),
      [
        completeTaking,
        item.taken,
        resetHoldProgress,
        resetPosition,
        translateX,
      ],
    );

    const progressWidth = holdProgress.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%'],
    });

    return (
      <View style={styles.row}>
        <View style={styles.timeline}>
          <View
            style={[
              styles.timelineLine,
              styles.timelineLineTop,
              index === 0 && styles.timelineLineHidden,
              previousTaken && styles.timelineLineActive,
            ]}
          />

          <View
            style={[
              styles.timelineDot,
              item.taken && styles.timelineDotActive,
              !item.taken && styles.timelineDotPending,
            ]}
          >
            {item.taken && <View style={styles.timelineDotCenter} />}
          </View>

          <View
            style={[
              styles.timelineLine,
              styles.timelineLineBottom,
              isLast && styles.timelineLineHidden,
              item.taken && styles.timelineLineActive,
            ]}
          />
        </View>

        <View style={styles.swipeWrap}>
          <View style={styles.swipeAction}>
            <View style={styles.swipeActionIcon}>
              <CheckIcon />
            </View>
          </View>

          <Animated.View
            style={[
              styles.animatedItem,
              {
                transform: [{ translateX }],
              },
            ]}
            {...panResponder.panHandlers}
          >
            <TouchableOpacity
              activeOpacity={0.85}
              disabled={item.taken}
              onPressIn={startHoldProgress}
              onPressOut={cancelHoldProgress}
              style={styles.item}
            >
              <Animated.View
                pointerEvents="none"
                style={[styles.holdProgress, { width: progressWidth }]}
              />

              <View style={styles.iconWrap}>
                <Image
                  style={styles.image}
                  source={require('../../assets/images/pill.png')}
                />
              </View>

              <View style={styles.itemContent}>
                <Text style={styles.itemName}>{item.name}</Text>

                <Text style={styles.itemMeta}>{item.dose}</Text>
              </View>

              <Text style={styles.itemTime}>{item.time}</Text>

              <View
                style={[styles.checkbox, item.taken && styles.checkboxChecked]}
              >
                {item.taken && <CheckIcon />}
              </View>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    );
  },
);
