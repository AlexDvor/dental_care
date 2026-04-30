import { ScrollView, StatusBar, Text, View } from 'react-native';

import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import HealthBanner from '../../components/HealthBanner/HealthBanner';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import PromoBanner from '../../components/PromoBanner/PromoBanner';
import QuickActionsGrid from '../../components/QuickActionsGrid/QuickActionsGrid';
import StatsCard from '../../components/StatsCard/StatsCard';
import { Theme } from '../../constants/colors';
import TrustBlock from '../../ui/TrustBlock/TrustBlock';

import { styles } from './HomeScreen.style';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent />

      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false} // прибирає білий “відскок” на iOS
      >
        <HomeHeader />
        <Text style={styles.userName}> John Doe</Text>
        <Text style={styles.userEmail}>johndoe@gmail.com</Text>

        <View style={styles.content}>
          <StatsCard />

          <AppointmentCard style={{ marginTop: Theme.spacing.lg }} />

          <QuickActionsGrid />

          <HealthBanner />
          {/* <PromoBanner
            title="Cleaning Reminder"
            description="It's been 6 months since your last cleaning."
            buttonText="Book Cleaning"
            onPress={() => {}}
            expiresIn={86400}
          /> */}
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
    </View>
  );
};

export default HomeScreen;
