import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Theme } from '../../constants/theme';
import { Icon } from '../../ui/Icon/Icon';
import { StatsCardProps } from './StatsCard.interface';

import { styles } from './StatsCard.style';

const StatsCard = ({ style, layout = 'row' }: StatsCardProps) => {
  const isColumn = layout === 'column';

  return (
    <View style={[styles.container, isColumn && styles.containerColumn, style]}>
      <View
        style={[styles.card, styles.visitsCard, isColumn && styles.cardColumn]}
      >
        <View style={styles.content}>
          <LinearGradient
            colors={['#27AE60', '#D1FAE5']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.iconWrapper}
          >
            <Icon
              name="viewRecords"
              size={25}
              color={Theme.colors.icon.primary}
            />
          </LinearGradient>

          <View style={styles.textBlock}>
            <Text style={styles.value}>12</Text>
            <Text style={styles.label}>Visits</Text>
          </View>
        </View>

        <Image
          source={require('../../assets/images/visit_stats_mint.png')}
          style={[
            styles.visitStatsImage,
            isColumn && styles.visitStatsImageColumn,
          ]}
        />
      </View>

      <View
        style={[
          styles.card,
          styles.upcomingCard,
          isColumn && styles.cardColumn,
        ]}
      >
        <View style={styles.content}>
          <LinearGradient
            colors={['#B99BFF', Theme.colors.icon.purple]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.iconWrapper}
          >
            <Icon
              name="schedule"
              size={20}
              color={Theme.colors.text.inverted}
            />
          </LinearGradient>

          <View style={styles.textBlock}>
            <Text style={styles.value}>2</Text>
            <Text style={styles.label}>Upcoming</Text>
          </View>
        </View>

        <View
          style={[
            styles.calendarWrapper,
            isColumn && styles.calendarWrapperColumn,
          ]}
        >
          <Image
            source={require('../../assets/images/upcoming_calendar.png')}
            style={[
              styles.calendarImage,
              isColumn && styles.calendarImageColumn,
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default StatsCard;
