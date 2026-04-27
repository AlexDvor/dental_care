import { RouteProp, useRoute } from '@react-navigation/native';
import { BookingStackParamList } from '../../navigation/types';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DoctorHeader from '../../components/DoctorProfile/DoctorHeader/DoctorHeader';
import EducationItem from '../../components/DoctorProfile/EducationItem/EducationItem';
import AboutSection from '../../components/DoctorProfile/AboutSection/AboutSection';
import StatsRow from '../../components/DoctorProfile/StatsRow/StatsRow';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import LayoutAreaView from '../../layout/LayoutAreaView';
import ReviewsSection from '../../components/DoctorProfile/ReviewsSection/ReviewsSection';
import SeparatorSection from '../../ui/SeparatorSection/SeparatorSection';

import { styles } from './DoctorProfileScreen.style';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDoctorById } from '../../hook/useDoctorById';

type Navigation = NativeStackNavigationProp<
  BookingStackParamList,
  'DoctorProfile'
>;

type Route = RouteProp<BookingStackParamList, 'DoctorProfile'>;

const DoctorProfileScreen = () => {
  const route = useRoute<Route>();
  const navigation = useNavigation<Navigation>();

  const { doctorId, serviceType, totalPrice } = route.params;
  const { data, error, loading } = useDoctorById(doctorId);
  console.log('data', data?.stats);

  const handlePressToSelectDate = () => {
    navigation.navigate('SelectDate', { doctorId, serviceType, totalPrice });
  };

  return (
    <LayoutAreaView withHeader>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DoctorHeader
          name={data?.name || 'Doctor Name'}
          rating={data?.rating || 0.0}
          image={'https://placehold.co/100x10'}
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
    </LayoutAreaView>
  );
};

export default DoctorProfileScreen;
