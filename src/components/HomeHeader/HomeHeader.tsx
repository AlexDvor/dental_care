import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '../../constants/colors';
import { Icon } from '../../ui/Icon/Icon';
import Wave from '../../ui/Wave/Wave';

const HomeHeader = () => {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={['#1F8A5B', '#0E7A4B']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={[styles.container, { paddingTop: insets.top }]}
    >
      <Text style={styles.title}>Hello, John 👋</Text>
      <Text style={styles.subtitle}>Here’s your dental health overview</Text>

      <View style={styles.avatarWrapper}>
        <Image
          source={require('../../assets/images/doctor.jpg')}
          style={styles.avatar}
        />

        <View style={styles.editBadge}>
          <Icon name="edit" size={14} color="#fff" />
        </View>
      </View>

      <Wave />
    </LinearGradient>
  );
};

export default HomeHeader;
const styles = StyleSheet.create({
  container: {
    paddingBottom: 150,
    alignItems: 'center',
    position: 'relative',
  },

  title: {
    fontSize: Theme.typography.size.h2,
    color: Theme.colors.base.white,
    fontWeight: Theme.typography.fontWeight.semibold,
    alignSelf: 'flex-start',
    marginLeft: Theme.spacing.lg,
  },

  subtitle: {
    color: '#D1FAE5',
    alignSelf: 'flex-start',
    marginLeft: Theme.spacing.lg,
    marginTop: 4,
  },

  avatarWrapper: {
    position: 'absolute',
    left: '50%',
    bottom: 60,
    transform: [{ translateX: -55 }, { translateY: 55 }],
    zIndex: 2,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: Theme.colors.background.primary,
  },

  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Theme.colors.primary.main,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: Theme.colors.background.primary,
  },
});
