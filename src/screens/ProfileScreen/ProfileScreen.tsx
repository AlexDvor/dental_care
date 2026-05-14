import React from 'react';
import { ScrollView, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import AccountSection from '../../components/ProfileUser/AccountSection/AccountSection';
import { Theme } from '../../constants/theme';
import { useAuth } from '../../hook/useAuth';
import ScreenLayout from '../../layout/ScreenLayout';
import { ProfileStackParamList } from '../../navigation/types';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';

import { styles } from './ProfileScreen.styles';

type Navigation = NativeStackNavigationProp<
  ProfileStackParamList,
  'ProfileMain'
>;

const ProfileScreen = () => {
  const navigation = useNavigation<Navigation>();
  const { logout, isSubmitting, userProfile } = useAuth();

  return (
    <ScreenLayout
      style={styles.container}
      statusBarBackgroundColor={Theme.colors.statusBar.secondary}
      statusBarStyle="light-content"
    >
      <ProfileHeader
        name={userProfile?.firstName || ''}
        fullName={userProfile?.fullName || ''}
        email={userProfile?.email || ''}
        style={{ paddingBottom: 10 }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <AccountSection
            onVisitHistoryPress={() => navigation.navigate('VisitHistory')}
          />

          <CustomBtn
            title={isSubmitting ? 'Logging out...' : 'Log Out'}
            onPress={logout}
            style={{ marginTop: 'auto' }}
            icon="logout"
            iconSize={23}
            isDisabled={isSubmitting}
          />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default ProfileScreen;
