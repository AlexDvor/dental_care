import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import TreatmentItem from '../TreatmentItem/TreatmentItem';
import { TreatmentsListProps } from './TreatmentList.interface';
import { styles } from './TreatmentList.style';

const TreatmentList = ({ data }: TreatmentsListProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dental Treatments</Text>
        <TouchableOpacity>
          <Text style={styles.link}>See All</Text>
        </TouchableOpacity>
      </View>
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
