import { View, FlatList } from 'react-native';
import TreatmentItem from '../TreatmentItem/TreatmentItem';
import { TreatmentsListProps } from './TreatmentList.interface';
import { styles } from './TreatmentList.style';
import SectionHeader from '../SectionHeader/SectionHeader';

const TreatmentList = ({ data }: TreatmentsListProps) => {
  return (
    <View style={styles.container}>
      <SectionHeader title="Dental Treatments" />
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <TreatmentItem {...item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default TreatmentList;
