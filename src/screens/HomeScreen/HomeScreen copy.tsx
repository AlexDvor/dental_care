import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';

import { seedDoctors } from '../../api/seed';
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import PromoBanner from '../../components/PromoBanner/PromoBanner';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { Theme } from '../../constants/colors';
import LayoutAreaView from '../../layout/LayoutAreaView';
import QuickActionCard from '../../ui/QuickActionCard/QuickActionCard';
import TrustBlock from '../../ui/TrustBlock/TrustBlock';

// type Navigation = NativeStackNavigationProp<HomeStackParamList, 'HomeMain'>;

const HomeScreen = () => {
  // const navigation = useNavigation<Navigation>();

  // navigation.navigate()

  // useEffect(() => {
  //   seedDoctors();
  // }, []);
  return (
    <LayoutAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        // style={{ backgroundColor: 'red' }}
      >
        <View>
          <SectionHeader title="Upcoming Appointment" />
          <AppointmentCard style={{ marginBottom: Theme.spacing.md }} />
          <SectionHeader title="Quick Actions" />
          <View style={{ flexDirection: 'row', gap: Theme.spacing.md }}>
            <QuickActionCard
              title="Book Appointment"
              icon="schedule"
              onPress={() => {}}
              iconBackground="#E8F3ED"
              iconColor={Theme.colors.primary.main}
            />

            <QuickActionCard
              title="Find Doctor"
              icon="findDoctor"
              onPress={() => {}}
              iconBackground="#EAF2FF"
              iconColor="#3B82F6"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: Theme.spacing.md,
              marginTop: Theme.spacing.md,
            }}
          >
            <QuickActionCard
              title="Chat Support"
              icon="chat"
              onPress={() => {}}
              iconBackground="#F3E8FF"
              iconColor="#8B5CF6"
            />

            <QuickActionCard
              title="View Records"
              icon="viewRecords"
              onPress={() => {}}
              iconBackground="#E6FFFA"
              iconColor="#14B8A6"
            />
          </View>
          <PromoBanner
            title="Cleaning Reminder"
            description="It's been 6 months since your last cleaning."
            buttonText="Book Cleaning"
            onPress={() => {}}
            expiresIn={86400}
          />
          <TrustBlock
            items={[
              { label: 'Verified', icon: 'verified', color: '#16A34A' },
              { label: 'Encrypted', icon: 'lock', color: '#2563EB' },
              { label: 'Top Tier', icon: 'award', color: '#EF4444' },
            ]}
            brandName="DentalCare"
            description="Premium dental care simplified."
            onPrivacyPress={() => {}}
            onTermsPress={() => {}}
          />
        </View>
      </ScrollView>
    </LayoutAreaView>
  );
};

export default HomeScreen;
