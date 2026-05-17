import React, { useEffect, useRef, useState } from 'react';
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
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { Theme } from '../../../constants/theme';
import { useAuth } from '../../../hook/useAuth';
import ScreenLayout from '../../../layout/ScreenLayout';
import CustomBtn from '../../../ui/CustomBtn/CustomBtn';
import { authContent } from '../auth.data';
import {
  OTP_CODE_LENGTH,
  OTP_TIMER_SECONDS,
  OtpFormValues,
  otpSchema,
} from '../auth.validation';

import { styles } from './OtpVerificationScreen.style';

const EMPTY_CODE = Array.from({ length: OTP_CODE_LENGTH }, () => '');

const OtpVerificationScreen = () => {
  const [code, setCode] = useState(EMPTY_CODE);
  const [secondsLeft, setSecondsLeft] = useState(OTP_TIMER_SECONDS);
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const { confirmRegistrationCode, resendRegistrationCode, isSubmitting } =
    useAuth();

  const {
    control,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      code: '',
    },
  });

  useEffect(() => {
    if (secondsLeft === 0) {
      return;
    }

    const timerId = setInterval(() => {
      setSecondsLeft(currentValue => currentValue - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [secondsLeft]);

  const handleCodeChange = (value: string, index: number) => {
    const nextDigit = value.replace(/\D/g, '').slice(-1);
    const nextCode = [...code];
    nextCode[index] = nextDigit;

    setCode(nextCode);
    setValue('code', nextCode.join(''), { shouldValidate: true });

    if (nextDigit && index < OTP_CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleConfirmCode: SubmitHandler<OtpFormValues> = async data => {
    try {
      await confirmRegistrationCode(data.code);
    } catch (error: any) {
      if (error.field === 'code') {
        setError('code', { message: error.message });
        return;
      }

      Alert.alert('Verification error', error.message);
    }
  };

  const handleResendCode = async () => {
    if (secondsLeft > 0) {
      return;
    }

    try {
      await resendRegistrationCode();
      setCode(EMPTY_CODE);
      setValue('code', '');
      setSecondsLeft(OTP_TIMER_SECONDS);
      inputRefs.current[0]?.focus();
    } catch (error: any) {
      Alert.alert('Resend error', error.message);
    }
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
            source={authContent.otp.image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.header}>
          <Text style={styles.title}>{authContent.otp.title}</Text>
          <Text style={styles.description}>{authContent.otp.description}</Text>
        </View>

        <Controller
          control={control}
          name="code"
          render={() => (
            <View>
              <View style={styles.codeRow}>
                {code.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={ref => {
                      inputRefs.current[index] = ref;
                    }}
                    style={[
                      styles.codeInput,
                      errors.code && styles.codeInputError,
                    ]}
                    value={digit}
                    onChangeText={value => handleCodeChange(value, index)}
                    onKeyPress={({ nativeEvent }) =>
                      handleKeyPress(nativeEvent.key, index)
                    }
                    keyboardType="number-pad"
                    maxLength={1}
                    textAlign="center"
                  />
                ))}
              </View>

              {errors.code?.message && (
                <Text style={styles.errorText}>{errors.code.message}</Text>
              )}
            </View>
          )}
        />

        <View style={styles.footer}>
          <Text style={styles.timerText}>
            {secondsLeft > 0
              ? `You can resend code in ${secondsLeft}s`
              : 'You can request a new code now.'}
          </Text>

          <CustomBtn
            title={
              isSubmitting ? 'Checking code...' : authContent.otp.buttonTitle
            }
            onPress={handleSubmit(handleConfirmCode)}
            style={styles.button}
            isDisabled={isSubmitting}
          />

          <Pressable
            style={styles.resendButton}
            hitSlop={8}
            onPress={handleResendCode}
            disabled={secondsLeft > 0 || isSubmitting}
          >
            <Text
              style={[
                styles.secondaryAction,
                (secondsLeft > 0 || isSubmitting) && styles.disabledAction,
              ]}
            >
              {authContent.otp.secondaryAction}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default OtpVerificationScreen;
