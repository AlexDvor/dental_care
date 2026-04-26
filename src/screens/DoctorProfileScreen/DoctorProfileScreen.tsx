import { RouteProp, useRoute } from '@react-navigation/native';
import { BookingStackParamList } from '../../navigation/types';
import { View, ScrollView } from 'react-native';

import DoctorHeader from '../../components/DoctorProfile/DoctorHeader/DoctorHeader';
import EducationItem from '../../components/DoctorProfile/EducationItem/EducationItem';
import AboutSection from '../../components/DoctorProfile/AboutSection/AboutSection';
import StatsRow from '../../components/DoctorProfile/StatsRow/StatsRow';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import LayoutAreaView from '../../layout/LayoutAreaView';
import ReviewsSection from '../../components/DoctorProfile/ReviewsSection/ReviewsSection';
import SeparatorSection from '../../ui/SeparatorSection/SeparatorSection';

import { styles } from './DoctorProfileScreen.style';

type Route = RouteProp<BookingStackParamList, 'DoctorProfile'>;

const DoctorProfileScreen = ({ navigation }: any) => {
  const route = useRoute<Route>();
  const { doctorId } = route.params;
  console.log('🚀 ~ doctorId:', doctorId);
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
          <CustomBtn
            title="Choose Doctor"
            onPress={() => navigation.navigate('SelectDate')}
            style={styles.btnWrapper}
            textStyle={styles.btnText}
          />
        </View>
      </ScrollView>
    </LayoutAreaView>
  );
};

export default DoctorProfileScreen;
