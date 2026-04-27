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

type Navigation = NativeStackNavigationProp<
  BookingStackParamList,
  'DoctorProfile'
>;

type Route = RouteProp<BookingStackParamList, 'DoctorProfile'>;

const DoctorProfileScreen = () => {
  const route = useRoute<Route>();
  const navigation = useNavigation<Navigation>();

  const { doctorId, serviceType, totalPrice } = route.params;

  const handlePressToSelectDate = () => {
    navigation.navigate('SelectDate', { doctorId, serviceType, totalPrice });
  };
  return (
    <LayoutAreaView withHeader>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DoctorHeader />

        <AboutSection />

        <EducationItem />

        <SeparatorSection spacing={15} />

        <ReviewsSection />

        <StatsRow />

        <View style={styles.footer}>
          <CustomBtn title="Choose Doctor" onPress={handlePressToSelectDate} />
        </View>
      </ScrollView>
    </LayoutAreaView>
  );
};

export default DoctorProfileScreen;
