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
import { RegisterFormValues, registerSchema } from '../auth.validation';

import { styles } from './RegisterScreen.style';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen = ({ navigation }: Props) => {
  const { startRegistration, isSubmitting } = useAuth();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      secondName: '',
      email: '',
      phone: '+34',
      password: '',
    },
  });

  const handleCreateAccount: SubmitHandler<RegisterFormValues> = async data => {
    console.log(data);
    try {
      await startRegistration(data);
      navigation.navigate('OtpVerification');
    } catch (error: any) {
      if (
        error.field === 'firstName' ||
        error.field === 'secondName' ||
        error.field === 'email' ||
        error.field === 'phone' ||
        error.field === 'password'
      ) {
        setError(error.field, { message: error.message });
        return;
      }

      Alert.alert('Registration error', error.message);
    }
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
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
            <Text style={styles.label}>{authFields.firstName.label}</Text>
            <Controller
              control={control}
              name="firstName"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={[styles.input, errors.firstName && styles.inputError]}
                  value={value}
                  onChangeText={onChange}
                  placeholder={authFields.firstName.placeholder}
                  placeholderTextColor={styles.placeholder.color}
                  autoCapitalize="words"
                />
              )}
            />
            {errors.firstName?.message && (
              <Text style={styles.errorText}>{errors.firstName.message}</Text>
            )}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>{authFields.secondName.label}</Text>
            <Controller
              control={control}
              name="secondName"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={[styles.input, errors.secondName && styles.inputError]}
                  value={value}
                  onChangeText={onChange}
                  placeholder={authFields.secondName.placeholder}
                  placeholderTextColor={styles.placeholder.color}
                  autoCapitalize="words"
                />
              )}
            />
            {errors.secondName?.message && (
              <Text style={styles.errorText}>{errors.secondName.message}</Text>
            )}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>{authFields.phone.label}</Text>
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={[styles.input, errors.phone && styles.inputError]}
                  value={value}
                  onChangeText={onChange}
                  placeholder={authFields.phone.placeholder}
                  placeholderTextColor={styles.placeholder.color}
                  keyboardType="phone-pad"
                />
              )}
            />
            {errors.phone?.message && (
              <Text style={styles.errorText}>{errors.phone.message}</Text>
            )}
          </View>

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

        <View style={styles.footer}>
          <CustomBtn
            title={
              isSubmitting
                ? 'Sending code...'
                : authContent.register.buttonTitle
            }
            onPress={handleSubmit(handleCreateAccount)}
            style={styles.button}
            isDisabled={isSubmitting}
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
