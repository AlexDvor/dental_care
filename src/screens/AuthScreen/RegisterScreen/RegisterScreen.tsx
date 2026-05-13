import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import ScreenLayout from '../../../layout/ScreenLayout';
import { RootStackParamList } from '../../../navigation/types';
import CustomBtn from '../../../ui/CustomBtn/CustomBtn';
import { authContent, authFields } from '../auth.data';

import { styles } from './RegisterScreen.style';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen = ({ navigation }: Props) => {
  const handleCreateAccount = () => {
    navigation.navigate('OtpVerification');
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <ScreenLayout style={styles.container} avoidBottomTabBar={false}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <Image
            source={authContent.register.image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.header}>
          <Text style={styles.title}>{authContent.register.title}</Text>
          <Text style={styles.description}>
            {authContent.register.description}
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>{authFields.fullName.label}</Text>
            <TextInput
              style={styles.input}
              placeholder={authFields.fullName.placeholder}
              placeholderTextColor={styles.placeholder.color}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>{authFields.phone.label}</Text>
            <TextInput
              style={styles.input}
              placeholder={authFields.phone.placeholder}
              placeholderTextColor={styles.placeholder.color}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>{authFields.email.label}</Text>
            <TextInput
              style={styles.input}
              placeholder={authFields.email.placeholder}
              placeholderTextColor={styles.placeholder.color}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>{authFields.password.label}</Text>
            <TextInput
              style={styles.input}
              placeholder={authFields.password.placeholder}
              placeholderTextColor={styles.placeholder.color}
              secureTextEntry
            />
          </View>
        </View>

        <View style={styles.footer}>
          <CustomBtn
            title={authContent.register.buttonTitle}
            onPress={handleCreateAccount}
            style={styles.button}
          />

          <View style={styles.secondaryRow}>
            <Text style={styles.secondaryText}>
              {authContent.register.secondaryText}
            </Text>
            <Pressable onPress={handleLoginPress} hitSlop={8}>
              <Text style={styles.secondaryAction}>
                {authContent.register.secondaryAction}
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default RegisterScreen;
