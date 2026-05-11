import { Image, Text, View } from 'react-native';

import { DoctorHeaderProps } from './DoctorHeader.interface';

import { styles } from './DoctorHeader.style';

const DoctorHeader = ({
  name,
  rating,
  reviews,
  specialty,
  image,
}: DoctorHeaderProps) => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={typeof image === 'string' ? { uri: image } : image}
        style={styles.image}
        resizeMode="cover"
        borderRadius={10}
      />

      <View style={styles.card}>
        <Text style={styles.name}>{name}</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>{specialty}</Text>
        </View>

        <View style={styles.ratingWrapper}>
          <Text style={styles.rating}>⭐ {rating} </Text>
          <Text style={styles.review}>{`(${reviews.length} reviews)`}</Text>
        </View>
      </View>
    </View>
  );
};

export default DoctorHeader;
