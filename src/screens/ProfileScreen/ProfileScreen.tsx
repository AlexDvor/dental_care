import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AccountSection from '../../components/ProfileUser/AccountSection/AccountSection';
import ProfileHeader from '../../components/ProfileUser/ProfileHeader/ProfileHeader';
import StatsCard from '../../components/ProfileUser/StatsCard/StatsCard';
import { Theme } from '../../constants/colors';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';

const ProfileScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeader />
        <View style={styles.content}>
          <StatsCard />
          <AccountSection />
          <CustomBtn
            title="Log Out"
            onPress={() => {}}
            style={{ marginTop: 20 }}
            icon="logout"
            iconSize={23}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background.primary,
  },
  content: {
    paddingHorizontal: Theme.spacing.lg,
    paddingBottom: Theme.spacing.massive,
    marginTop: -Theme.spacing.xl,
  },
});
