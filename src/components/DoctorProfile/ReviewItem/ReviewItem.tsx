import { Image,Text, View } from 'react-native';

import { ReviewItemProps } from './ReviewItem.interface';

import { styles } from './ReviewItem.style';

const ReviewItem = ({ item }: ReviewItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.left}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />

          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.stars}>{'⭐'.repeat(item.rating)}</Text>
          </View>
        </View>

        <Text style={styles.time}>{item.date}</Text>
      </View>

      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};
export default ReviewItem;
