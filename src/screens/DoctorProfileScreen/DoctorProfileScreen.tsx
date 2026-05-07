import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import AboutSection from '../../components/DoctorProfile/AboutSection/AboutSection';
import DoctorHeader from '../../components/DoctorProfile/DoctorHeader/DoctorHeader';
import EducationItem from '../../components/DoctorProfile/EducationItem/EducationItem';
import ReviewsSection from '../../components/DoctorProfile/ReviewsSection/ReviewsSection';
import StatsRow from '../../components/DoctorProfile/StatsRow/StatsRow';
import { Theme } from '../../constants/colors';
import { useDoctorById } from '../../hook/useDoctorById';
import ScreenLayout from '../../layout/ScreenLayout';
import { BookingStackParamList } from '../../navigation/types';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import SeparatorSection from '../../ui/SeparatorSection/SeparatorSection';

import { styles } from './DoctorProfileScreen.style';

type Navigation = NativeStackNavigationProp<
  BookingStackParamList,
  'DoctorProfile'
>;

type Route = RouteProp<BookingStackParamList, 'DoctorProfile'>;

const DoctorProfileScreen = () => {
  const route = useRoute<Route>();
  const navigation = useNavigation<Navigation>();

  const { doctorId, serviceType, totalPrice } = route.params;
  const { data, error, isLoading, refetch } = useDoctorById(doctorId);

  const handlePressToSelectDate = () => {
    navigation.navigate('SelectDate', { doctorId, serviceType, totalPrice });
  };

  if (isLoading) {
    return (
      <ScreenLayout
        defaultPadding
        statusBarBackgroundColor={Theme.colors.statusBar.primary}
      >
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size={40} />
        </View>
      </ScreenLayout>
    );
  }

  if (error) {
    return (
      <ScreenLayout
        defaultPadding
        statusBarBackgroundColor={Theme.colors.statusBar.primary}
      >
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>{error.message}</Text>
          <CustomBtn title="Try again" onPress={refetch} />
        </View>
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout
      defaultPadding
      statusBarBackgroundColor={Theme.colors.statusBar.primary}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <DoctorHeader
          name={data?.name || 'Doctor Name'}
          rating={data?.rating || 0.0}
          image={data?.image || ''}
          reviews={data?.reviews || []}
          specialty={data?.specialty || ''}
        />

        <AboutSection about={data?.about || "Doctor's about text here..."} />

        <EducationItem
          education={
            data?.education || { university: '', period: '', degree: '' }
          }
        />

        <SeparatorSection spacing={15} />

        <ReviewsSection reviews={data?.reviews || []} />

        <StatsRow
          experience={data?.experience || 0}
          stats={data?.stats || { patients: 0, satisfaction: 0 }}
        />

        <View style={styles.footer}>
          <CustomBtn title="Choose Doctor" onPress={handlePressToSelectDate} />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default DoctorProfileScreen;
