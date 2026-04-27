import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../../../constants/colors';
import { Icon, IconNameType } from '../../../ui/Icon/Icon';

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

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingVertical: Theme.spacing.md,

    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },

  lastRow: {
    borderBottomWidth: 0,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing.md,
  },

  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: Theme.radius.sm,

    backgroundColor: Theme.colors.background.soft,

    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
  },

  value: {
    color: Theme.colors.text.primary,
    fontWeight: Theme.typography.fontWeight.medium,
  },
});
