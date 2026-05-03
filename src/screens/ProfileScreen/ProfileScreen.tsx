import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import AccountSection from '../../components/ProfileUser/AccountSection/AccountSection';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';

import { styles } from './ProfileScreen.styles';

const ProfileScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
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
    </SafeAreaView>
  );
};

export default ProfileScreen;
