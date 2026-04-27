import { Text, TouchableOpacity, View } from 'react-native';
import { CustomBtnProps } from './CustomBtn.types';
import { styles } from './CustomBtn.styles';
import { Icon } from '../Icon/Icon';
import { Theme } from '../../constants/colors';

const CustomBtn = ({
  title,
  onPress,
  style,
  textStyle,
  icon,
  iconPosition = 'left',
  iconSize = 20,
  iconColor = '#fff',
  type = 'primary',
}: CustomBtnProps) => {
  const isPrimary = type === 'primary';

  const containerTypeStyle = {
    backgroundColor: isPrimary
      ? Theme.colors.background.accent
      : Theme.colors.background.soft,
  };

  const textTypeStyle = {
    color: isPrimary ? Theme.colors.text.inverted : Theme.colors.text.badge,
  };

  return (
    <TouchableOpacity
      style={[styles.container, containerTypeStyle, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        {icon && iconPosition === 'left' && (
          <Icon
            name={icon}
            size={iconSize}
            color={iconColor}
            style={{ marginRight: 8 }}
          />
        )}

        <Text style={[styles.title, textTypeStyle, textStyle]}>{title}</Text>

        {icon && iconPosition === 'right' && (
          <Icon
            name={icon}
            size={iconSize}
            color={iconColor}
            style={{ marginLeft: 8 }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomBtn;
