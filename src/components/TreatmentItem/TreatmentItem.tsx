import { Image,Text, View } from 'react-native';

import { TreatmentItemProps } from './TreatmentItem.interface';

import { styles } from './TreatmentItem.style';

const TreatmentItem = ({ name, image }: TreatmentItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default TreatmentItem;
