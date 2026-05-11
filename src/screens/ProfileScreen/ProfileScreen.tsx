import React from 'react';
import { ScrollView, View } from 'react-native';

import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import AccountSection from '../../components/ProfileUser/AccountSection/AccountSection';
import { Theme } from '../../constants/theme';
import ScreenLayout from '../../layout/ScreenLayout';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';

import { styles } from './ProfileScreen.styles';

const ProfileScreen = () => {
  return (
    <ScreenLayout
      style={styles.container}
      statusBarBackgroundColor={Theme.colors.statusBar.secondary}
      statusBarStyle="light-content"
    >
      <ProfileHeader style={{ paddingBottom: 10 }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <AccountSection />

          <CustomBtn
            title="Log Out"
            onPress={() => {}}
            style={{ marginTop: 'auto' }}
            icon="logout"
            iconSize={23}
          />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default ProfileScreen;
