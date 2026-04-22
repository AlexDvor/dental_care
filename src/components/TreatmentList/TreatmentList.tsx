import { StyleSheet, Text, View, FlatList } from 'react-native';
import TreatmentItem from '../TreatmentItem/TreatmentItem';
import { TreatmentsListProps } from './TreatmentList.interface';

const TreatmentList = ({ data }: TreatmentsListProps) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <TreatmentItem {item} />}
      />
    </View>
  );
};

export default TreatmentList;
