import { Text,View } from 'react-native';

import { Theme } from '../../../constants/colors';
import { Icon, IconNameType } from '../../../ui/Icon/Icon';

import { styles } from './DetailRow.styles';

type Props = {
  label: string;
  value: string;
  icon: IconNameType;
  isLast?: boolean;
};

const DetailRow = ({ label, value, icon, isLast }: Props) => {
  return (
    <View style={[styles.row, isLast && styles.lastRow]}>
      <View style={styles.left}>
        <View style={styles.iconWrapper}>
          <Icon name={icon} size={24} color={Theme.colors.primary.main} />
        </View>

        <Text style={styles.label}>{label}</Text>
      </View>

      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default DetailRow;
