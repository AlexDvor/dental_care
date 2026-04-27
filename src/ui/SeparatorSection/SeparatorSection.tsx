import { StyleSheet,View } from 'react-native';

import { Theme } from '../../constants/colors';

type Props = {
  spacing?: number;
};

const SeparatorSection = ({ spacing = Theme.spacing.lg }: Props) => {
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
