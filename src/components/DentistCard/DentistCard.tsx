import { Image, Text, View } from 'react-native';
import React from 'react';
import { Icon } from '../../ui/Icon/Icon';
import { styles } from './DentistCard.style';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import { Colors } from '../../constants/colors';

const DentistCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrap}>
        <Image
          source={require('../../assets/images/dr.jpg')}
          style={styles.image}
        />

        <View style={styles.infoWrap}>
          <Text style={styles.name}>Dr. Sarah Mitchell</Text>
          <Text style={styles.profession}>Orthodontist</Text>
          <View style={styles.ratingWrap}>
            <Icon name="rating" />
            <Text style={styles.ratingText}>4.9</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonWrap}>
        <CustomBtn
          title="Get Direction"
          onPress={() => {}}
          style={{
            backgroundColor: Colors.button.secondary,
            width: 164,
            borderRadius: 12,
          }}
          textStyle={{
            color: Colors.text.primary,
          }}
          icon="location"
          iconPosition="left"
        />
        <CustomBtn
          title="Book Now"
          onPress={() => {}}
          style={{
            width: 164,
            borderRadius: 12,
          }}
          icon="schedule"
          iconPosition="left"
        />
      </View>
    </View>
  );
};

export default DentistCard;
