import { Text, View } from 'react-native';

import { Theme } from '../../../constants/theme';
import { Icon } from '../../../ui/Icon/Icon';
import { DetailRowProps } from './DetailRow.interface';

import { styles } from './DetailRow.styles';

const DetailRow = ({ label, value, icon, isLast }: DetailRowProps) => {
  return (
    <View style={[styles.row, isLast && styles.lastRow]}>
      <View style={styles.left}>
        <View style={styles.iconWrapper}>
          <Icon name={icon} size={24} color={Theme.colors.icon.primary} />
        </View>

        <Text style={styles.label}>{label}</Text>
      </View>

      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default DetailRow;
