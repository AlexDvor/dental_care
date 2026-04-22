import { Text, TouchableOpacity, View } from 'react-native';
import { SectionHeaderProps } from './SectionHeader.interface';
import { styles } from './SectionHeader.style';
import { Icon } from '../../ui/Icon/Icon';
import { Colors } from '../../constants/colors';

const SectionHeader = ({ title, onPressSeeAll }: SectionHeaderProps) => {
  const handlePress = () => onPressSeeAll && onPressSeeAll();

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={handlePress} style={styles.wrapLink}>
        <Text style={styles.link}>See All</Text>
        <Icon name="arrow_r" size={12} color={Colors.text.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeader;
