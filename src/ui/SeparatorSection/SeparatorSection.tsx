import { StyleSheet, View } from 'react-native';

import { Theme } from '../../constants/theme';
import { SeparatorSectionProps } from './SeparatorSection.interface';

const SeparatorSection = ({
  spacing = Theme.spacing.lg,
}: SeparatorSectionProps) => {
  return <View style={[styles.container, { marginVertical: spacing }]} />;
};

export default SeparatorSection;

const styles = StyleSheet.create({
  container: {
    height: 1,
    width: '100%',
    backgroundColor: Theme.colors.border.default,
  },
});
