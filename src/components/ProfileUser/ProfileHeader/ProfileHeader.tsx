import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { Theme } from '../../../constants/colors';
import { Icon } from '../../../ui/Icon/Icon';

import { styles } from './ProfileHeader.styles';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        {/* <Icon
          name="findDoctor"
          size={60}
          color={Theme.colors.background.accent}
        /> */}

        <Image
          style={styles.image}
          source={require('../../../assets/images/doctor.jpg')}
        />
      </View>

      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>john@example.com</Text>

      <TouchableOpacity style={styles.editBtn}>
        <Text style={styles.editText}>Edit Profile</Text>
        <Icon name="edit" size={17} color={Theme.colors.base.white} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;
