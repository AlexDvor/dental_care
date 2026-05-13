import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Theme } from '../../constants/theme';
import { Icon } from '../../ui/Icon/Icon';
import { StatsCardProps } from './StatsCard.interface';

import { styles } from './StatsCard.style';

const visitsIconGradient = [
  Theme.colors.background.soft,
  Theme.colors.background.card,
];

const upcomingIconGradient = [
  Theme.colors.background.backPurple,
  Theme.colors.background.card,
];

const StatsCard = ({ style, layout = 'row' }: StatsCardProps) => {
  const isColumn = layout === 'column';

  return (
    <View style={[styles.container, isColumn && styles.containerColumn, style]}>
      <View
        style={[styles.card, styles.visitsCard, isColumn && styles.cardColumn]}
      >
        <View style={styles.content}>
          <LinearGradient
            colors={visitsIconGradient}
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
            <Text style={styles.value}>12</Text>
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
            colors={upcomingIconGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.iconWrapper}
          >
            <Icon
              name="statsUpcoming"
              size={24}
              color={Theme.colors.icon.purple}
            />
          </LinearGradient>

          <View style={styles.textBlock}>
            <Text style={styles.value}>2</Text>
            <Text style={styles.label}>Upcoming</Text>
          </View>
        </View>

        <View
          style={[styles.imageWrapper, isColumn && styles.imageWrapperColumn]}
        >
          <Image
            source={require('../../assets/images/upcoming_calendar.png')}
            style={styles.statImage}
          />
        </View>
      </View>
    </View>
  );
};

export default StatsCard;
