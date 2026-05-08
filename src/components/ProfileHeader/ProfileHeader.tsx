import React from 'react';
import { Image, StyleSheet, Text, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '../../constants/colors';
import { Icon } from '../../ui/Icon/Icon';
import Wave from '../../ui/Wave/Wave';

interface ProfileHeaderProps {
  style?: ViewStyle;
}

const ProfileHeader = ({ style }: ProfileHeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, style]}>
      <LinearGradient
        colors={['#1F8A5B', '#0E7A4B']}
        locations={[0, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={[styles.container]}
      >
        <Text style={styles.title}>Hello, John 👋</Text>
        <Text style={styles.subtitle}>
          Here’s your dental{'\n'}health overview
        </Text>

        <View style={styles.avatarWrapper}>
          <Image
            source={require('../../assets/images/doctor.jpg')}
            style={styles.avatar}
          />

          <View style={styles.editBadge}>
            <Icon name="edit" size={14} color="#16A34A" />
          </View>
        </View>

        <Wave />
      </LinearGradient>

      <View style={styles.userInfo}>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>johndoe@gmail.com</Text>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Theme.colors.background.main,
  },

  container: {
    position: 'relative',
    paddingBottom: 200,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.3,
    color: '#fff',
    marginLeft: 20,
  },

  subtitle: {
    color: 'rgba(255,255,255,0.85)',
    marginLeft: 20,
    marginTop: 6,
    lineHeight: 20,
  },

  avatarWrapper: {
    position: 'absolute',
    bottom: 70,
    alignSelf: 'center',
    zIndex: 10,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.85)',
  },

  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.6)',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },

  userInfo: {
    alignItems: 'center',
    marginTop: -60,
  },

  userName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1F2937',
  },

  userEmail: {
    marginTop: 6,
    color: '#6B7280',
  },
});
