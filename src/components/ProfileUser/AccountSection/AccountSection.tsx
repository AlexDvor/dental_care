import React from 'react';
import { Text, View } from 'react-native';

import AccountItem from '../AccountItem/AccountItem';
import { AccountSectionProps } from './AccountSection.interface';

import { styles } from './AccountSection.styles';

const AccountSection = ({ onVisitHistoryPress }: AccountSectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>

      <View style={styles.card}>
        <AccountItem
          icon="viewRecords"
          label="Visit History"
          onPress={onVisitHistoryPress}
        />
        <AccountItem icon="profile" label="My Doctors" />
        <AccountItem icon="price" label="Payment Methods" />
        <AccountItem icon="education" label="Notifications" />
        <AccountItem icon="chat" label="Help & Support" />
        <AccountItem icon="service" label="Settings" isLast />
      </View>
    </View>
  );
};

export default AccountSection;
