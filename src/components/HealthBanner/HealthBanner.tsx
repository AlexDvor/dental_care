import { Image, Text, TouchableOpacity, View } from 'react-native';

import { HealthBannerProps } from './HealthBanner.interface';

import { styles } from './HealthBanner.style';

const HealthBanner = ({ style }: HealthBannerProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.textBlock}>
        <Text style={styles.title}>Keep your smile healthy</Text>
        <Text style={styles.desc}>
          Regular checkups help prevent problems before they start.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Explore Services →</Text>
        </TouchableOpacity>
      </View>

      <Image
        style={styles.image}
        source={require('../../assets/images/healthy.png')}
      />
    </View>
  );
};

export default HealthBanner;
