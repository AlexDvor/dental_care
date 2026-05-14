import { Text, TouchableOpacity, View } from 'react-native';

import { Theme } from '../../../constants/theme';
import { Icon } from '../../../ui/Icon/Icon';
import { AccountItemProps } from './AccountItem.interface';

import { styles } from './AccountItem.styles';

const AccountItem = ({ icon, label, isLast, onPress }: AccountItemProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, !isLast && styles.border]}
      onPress={onPress}
      disabled={!onPress}
    >
      <View style={styles.left}>
        <View style={styles.iconWrap}>
          <Icon name={icon} size={18} color={Theme.colors.icon.primary} />
        </View>
        <Text style={styles.label}>{label}</Text>
      </View>

      <Icon name="arrow_r" size={18} color={Theme.colors.text.secondary} />
    </TouchableOpacity>
  );
};

export default AccountItem;
