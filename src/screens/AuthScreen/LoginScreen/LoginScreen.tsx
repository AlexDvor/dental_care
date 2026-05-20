import React from 'react';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { Theme } from '../../../constants/theme';
import { useAuth } from '../../../hook/useAuth';
import ScreenLayout from '../../../layout/ScreenLayout';
import { RootStackParamList } from '../../../navigation/types';
import CustomBtn from '../../../ui/CustomBtn/CustomBtn';
import { authContent, authFields } from '../auth.data';
import { LoginFormValues, loginSchema } from '../auth.validation';

import { styles } from './LoginScreen.style';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: Props) => {
  const { login, isSubmitting } = useAuth();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin: SubmitHandler<LoginFormValues> = async data => {
    try {
      await login(data);
    } catch (error: any) {
      if (error.field === 'email' || error.field === 'password') {
        setError(error.field, { message: error.message });
        return;
      }

      Alert.alert('Login error', error.message);
    }
  };

  const handleCreateAccountPress = () => {
    navigation.navigate('Register');
  };

  return (
    <ScreenLayout
      style={styles.container}
      avoidBottomTabBar={false}
      statusBarBackgroundColor={Theme.colors.statusBar.primary}
      statusBarStyle="dark-content"
    >
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
          <Text style={styles.description}>
            {authContent.login.description}
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>{authFields.email.label}</Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={[styles.input, errors.email && styles.inputError]}
                  value={value}
                  onChangeText={onChange}
                  placeholder={authFields.email.placeholder}
                  placeholderTextColor={styles.placeholder.color}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              )}
            />
            {errors.email?.message && (
              <Text style={styles.errorText}>{errors.email.message}</Text>
            )}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>{authFields.password.label}</Text>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={[styles.input, errors.password && styles.inputError]}
                  value={value}
                  onChangeText={onChange}
                  placeholder={authFields.password.placeholder}
                  placeholderTextColor={styles.placeholder.color}
                  secureTextEntry
                />
              )}
            />
            {errors.password?.message && (
              <Text style={styles.errorText}>{errors.password.message}</Text>
            )}
          </View>
        </View>

        <Pressable style={styles.forgotPasswordButton} hitSlop={8}>
          <Text style={styles.forgotPassword}>
            {authContent.login.forgotPassword}
          </Text>
        </Pressable>

        <View style={styles.footer}>
          <CustomBtn
            title={
              isSubmitting ? 'Logging in...' : authContent.login.buttonTitle
            }
            onPress={handleSubmit(handleLogin)}
            style={styles.button}
            isLoading={isSubmitting}
          />
          <CustomBtn
            title={
              isSubmitting ? 'Logging in...' : authContent.login.buttonTitle
            }
            onPress={handleSubmit(handleLogin)}
            style={styles.button}
            type="secondary"
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
