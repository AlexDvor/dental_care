import React from 'react';
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import ScreenLayout from '../../../layout/ScreenLayout';
import { RootStackParamList } from '../../../navigation/types';
import CustomBtn from '../../../ui/CustomBtn/CustomBtn';
import { authContent, authFields } from '../auth.data';

import { styles } from './LoginScreen.style';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: Props) => {
  const handleLogin = () => {
    navigation.replace('MainTabs');
  };

  const handleCreateAccountPress = () => {
    navigation.navigate('Register');
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
            source={authContent.login.image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.header}>
          <Text style={styles.title}>{authContent.login.title}</Text>
          <Text style={styles.description}>{authContent.login.description}</Text>
        </View>

        <View style={styles.form}>
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
            <Text style={styles.label}>{authFields.password.label}</Text>
            <TextInput
              style={styles.input}
              placeholder={authFields.password.placeholder}
              placeholderTextColor={styles.placeholder.color}
              secureTextEntry
            />
          </View>
        </View>

        <Pressable style={styles.forgotPasswordButton} hitSlop={8}>
          <Text style={styles.forgotPassword}>
            {authContent.login.forgotPassword}
          </Text>
        </Pressable>

        <View style={styles.footer}>
          <CustomBtn
            title={authContent.login.buttonTitle}
            onPress={handleLogin}
            style={styles.button}
          />

          <View style={styles.secondaryRow}>
            <Text style={styles.secondaryText}>
              {authContent.login.secondaryText}
            </Text>
            <Pressable onPress={handleCreateAccountPress} hitSlop={8}>
              <Text style={styles.secondaryAction}>
                {authContent.login.secondaryAction}
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default LoginScreen;
