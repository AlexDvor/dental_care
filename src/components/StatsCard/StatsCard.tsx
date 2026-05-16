import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Theme } from '../../constants/theme';
import { Icon } from '../../ui/Icon/Icon';
import { StatsCardProps } from './StatsCard.interface';

import { styles } from './StatsCard.style';

const iconGradient = [
  Theme.colors.background.soft,
  Theme.colors.background.card,
];

const StatsCard = ({
  style,
  layout = 'row',
  visitsCount = 0,
  upcomingCount = 0,
  isLoading = false,
}: StatsCardProps) => {
  const isColumn = layout === 'column';
  const visitsValue = isLoading ? '...' : String(visitsCount);
  const upcomingValue = isLoading ? '...' : String(upcomingCount);

  return (
    <View style={[styles.container, isColumn && styles.containerColumn, style]}>
      <View
        style={[styles.card, styles.visitsCard, isColumn && styles.cardColumn]}
      >
        <View style={styles.content}>
          <LinearGradient
            colors={iconGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.iconWrapper}
          >
            <Icon
              name="statsVisits"
              size={24}
              color={Theme.colors.icon.primary}
            />
          </LinearGradient>

          <View style={styles.textBlock}>
            <Text style={styles.value}>{visitsValue}</Text>
            <Text style={styles.label}>Visits</Text>
          </View>
        </View>

        <View
          style={[styles.imageWrapper, isColumn && styles.imageWrapperColumn]}
        >
          <Image
            source={require('../../assets/images/visit_stats_mint.png')}
            style={styles.statImage}
          />
        </View>
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
            colors={iconGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.iconWrapper}
          >
            <Icon
              name="statsUpcoming"
              size={24}
              color={Theme.colors.icon.primary}
            />
          </LinearGradient>

          <View style={styles.textBlock}>
            <Text style={styles.value}>{upcomingValue}</Text>
            <Text style={styles.label}>Upcoming</Text>
          </View>
        </View>

        <View
          style={[styles.imageWrapper, isColumn && styles.imageWrapperColumn]}
        >
          <Image
            source={require('../../assets/images/upcoming_calendar_mint.png')}
            style={styles.statImage}
          />
        </View>
      </View>
    </View>
  );
};

export default StatsCard;
