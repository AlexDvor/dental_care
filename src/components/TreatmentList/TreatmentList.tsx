import { FlatList,View } from 'react-native';

import SectionHeader from '../SectionHeader/SectionHeader';
import TreatmentItem from '../TreatmentItem/TreatmentItem';
import { TreatmentsListProps } from './TreatmentList.interface';

import { styles } from './TreatmentList.style';

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
