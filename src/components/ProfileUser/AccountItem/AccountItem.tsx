import { Text, TouchableOpacity, View } from 'react-native';

import { Theme } from '../../../constants/colors';
import { Icon } from '../../../ui/Icon/Icon';
import { AccountItemProps } from './AccountItem.interface';

import { styles } from './AccountItem.styles';

const AccountItem = ({ icon, label, isLast }: AccountItemProps) => {
  return (
    <TouchableOpacity style={[styles.container, !isLast && styles.border]}>
      <View style={styles.left}>
        <View style={styles.iconWrap}>
          <Icon name={icon} size={18} color={Theme.colors.primary.main} />
        </View>
        <Text style={styles.label}>{label}</Text>
      </View>

      <Icon name="arrow_r" size={18} color={Theme.colors.text.secondary} />
    </TouchableOpacity>
  );
};

export default AccountItem;
