import { Text, View } from 'react-native';

import { Theme } from '../../constants/colors';
import { Icon } from '../../ui/Icon/Icon';

import { styles } from './StatsCard.style';

const StatsCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={styles.iconWrapper}>
          <Icon name="schedule" size={22} color={Theme.colors.primary.main} />
        </View>
        <Text style={styles.value}>12</Text>
        <Text style={styles.label}>Total Visits</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.item}>
        <View style={styles.iconWrapper}>
          <Icon name="schedule" size={22} color={Theme.colors.primary.main} />
        </View>
        <Text style={styles.value}>2</Text>
        <Text style={styles.label}>Upcoming</Text>
      </View>
    </View>
  );
};

export default StatsCard;
