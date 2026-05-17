import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import AboutSection from '../../components/DoctorProfile/AboutSection/AboutSection';
import DoctorHeader from '../../components/DoctorProfile/DoctorHeader/DoctorHeader';
import EducationItem from '../../components/DoctorProfile/EducationItem/EducationItem';
import ReviewsSection from '../../components/DoctorProfile/ReviewsSection/ReviewsSection';
import StatsRow from '../../components/DoctorProfile/StatsRow/StatsRow';
import { Theme } from '../../constants/theme';
import { useDoctorById } from '../../hook/useDoctorById';
import { useDoctorReviews } from '../../hook/useDoctorReviews';
import ScreenLayout from '../../layout/ScreenLayout';
import { BookingStackParamList } from '../../navigation/types';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import SeparatorSection from '../../ui/SeparatorSection/SeparatorSection';
import {
  getDoctorDisplayRating,
  mapDoctorReviewsToReviewProps,
} from '../../utils/Doctor/doctorReviewMappers';

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
  const { data: firestoreReviews = [] } = useDoctorReviews(doctorId);

  const mappedFirestoreReviews = mapDoctorReviewsToReviewProps(firestoreReviews);
  const reviews = [...mappedFirestoreReviews, ...(data?.reviews || [])];
  const rating = getDoctorDisplayRating(reviews, data?.rating || 0);

  const handlePressToSelectDate = () => {
    navigation.navigate('SelectDate', { doctorId, serviceType, totalPrice });
  };

  if (isLoading) {
    return (
      <ScreenLayout
        defaultPadding
        statusBarBackgroundColor={Theme.colors.statusBar.primary}
      >
        <View style={styles.center}>
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
        <View style={styles.center}>
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
          rating={Number(rating.toFixed(1))}
          image={data?.image || ''}
          reviews={reviews}
          specialty={data?.specialty || ''}
        />

        <AboutSection about={data?.about || "Doctor's about text here..."} />

        <EducationItem
          education={
            data?.education || { university: '', period: '', degree: '' }
          }
        />

        <SeparatorSection spacing={15} />

        <ReviewsSection reviews={reviews} />

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
