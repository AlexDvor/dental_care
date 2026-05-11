import { Image, StyleProp, Text, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Path } from 'react-native-svg';

import { Theme } from '../../constants/theme';
import { Icon } from '../../ui/Icon/Icon';

import { styles } from './StatsCard.style';

type StatsCard = {
  style?: StyleProp<ViewStyle>;
};

const StatsCard = ({ style }: StatsCard) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.card}>
        <View style={styles.content}>
          <LinearGradient
            colors={['#8CC8FF', Theme.colors.icon.blue]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.iconWrapper}
          >
            <Icon
              name="viewRecords"
              size={23}
              color={Theme.colors.text.inverted}
            />
          </LinearGradient>

          <View style={styles.textBlock}>
            <Text style={styles.value}>12</Text>
            <Text style={styles.label}>Visits</Text>
          </View>
        </View>

        <Svg width={96} height={48} viewBox="0 0 96 48" style={styles.chart}>
          <Path
            d="M3 35 C 18 37, 18 14, 32 15 C 46 16, 45 39, 59 30 C 71 22, 68 2, 81 5 C 89 7, 88 21, 94 15"
            stroke="#9FCBFF"
            strokeWidth={2.4}
            strokeLinecap="round"
            fill="none"
          />
        </Svg>
      </View>

      <View style={styles.card}>
        <View style={styles.content}>
          <LinearGradient
            colors={['#B99BFF', Theme.colors.icon.purple]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.iconWrapper}
          >
            <Icon
              name="schedule"
              size={23}
              color={Theme.colors.text.inverted}
            />
          </LinearGradient>

          <View style={styles.textBlock}>
            <Text style={styles.value}>2</Text>
            <Text style={styles.label}>Upcoming</Text>
          </View>
        </View>

        <View style={styles.calendarWrapper}>
          <Image
            source={require('../../assets/images/upcoming_calendar.png')}
            style={styles.calendarImage}
          />
        </View>
      </View>
    </View>
  );
};

export default StatsCard;
