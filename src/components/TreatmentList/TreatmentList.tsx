import { View, FlatList } from 'react-native';
import TreatmentItem from '../TreatmentItem/TreatmentItem';
import { TreatmentsListProps } from './TreatmentList.interface';
import { styles } from './TreatmentList.style';

const TreatmentList = ({ data }: TreatmentsListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <TreatmentItem {...item} />}
        horizontal
      />
    </View>
  );
};

export default TreatmentList;
