import { View } from 'react-native';

import { Theme } from '../../constants/colors';
import QuickActionCard from '../../ui/QuickActionCard/QuickActionCard';

import { styles } from './QuickActionsGrid.style';

const QuickActionsGrid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <QuickActionCard
          title="Book Appointment"
          icon="schedule"
          onPress={() => {}}
        />
        <QuickActionCard
          title="Find Doctor"
          icon="findDoctor"
          onPress={() => {}}
          iconColor={Theme.colors.icon.blue}
          iconBackground={Theme.colors.background.backBlue}
        />
      </View>

      <View style={styles.row}>
        <QuickActionCard
          title="Chat Support"
          icon="chat"
          onPress={() => {}}
          iconColor={Theme.colors.icon.purple}
          iconBackground={Theme.colors.background.backPurple}
        />
        <QuickActionCard
          title="View Records"
          icon="viewRecords"
          onPress={() => {}}
          iconColor={Theme.colors.icon.teal}
          iconBackground={Theme.colors.background.backTeal}
        />
      </View>
    </View>
  );
};

export default QuickActionsGrid;
