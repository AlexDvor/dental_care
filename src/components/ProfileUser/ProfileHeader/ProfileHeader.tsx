import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { Theme } from '../../../constants/colors';
import { Icon } from '../../../ui/Icon/Icon';

import { styles } from './ProfileHeader.styles';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.paddingContainer}>
        <View style={styles.leftBlock}>
          {/* <Icon
          name="findDoctor"
          size={60}
          color={Theme.colors.background.accent}
        /> */}

          <Image
            style={styles.image}
            source={require('../../../assets/images/doctor.jpg')}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>john@example.com</Text>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.editBtn}>
            <Icon name="edit" size={17} color={Theme.colors.base.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
