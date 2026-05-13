import React, { useRef, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Theme } from '../../../constants/theme';
import ScreenLayout from '../../../layout/ScreenLayout';
import { RootStackParamList } from '../../../navigation/types';
import CustomBtn from '../../../ui/CustomBtn/CustomBtn';
import { authContent } from '../auth.data';

import { styles } from './OtpVerificationScreen.style';

type Props = NativeStackScreenProps<RootStackParamList, 'OtpVerification'>;

const CODE_LENGTH = 4;
const EMPTY_CODE = Array.from({ length: CODE_LENGTH }, () => '');

const OtpVerificationScreen = ({ navigation }: Props) => {
  const [code, setCode] = useState(EMPTY_CODE);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleCodeChange = (value: string, index: number) => {
    const nextCode = [...code];
    nextCode[index] = value.slice(-1);
    setCode(nextCode);

    if (value && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleConfirmCode = () => {
    navigation.replace('MainTabs');
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

        <View style={styles.codeRow}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => {
                inputRefs.current[index] = ref;
              }}
              style={styles.codeInput}
              value={digit}
              onChangeText={value => handleCodeChange(value, index)}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
            />
          ))}
        </View>

        <View style={styles.footer}>
          <CustomBtn
            title={authContent.otp.buttonTitle}
            onPress={handleConfirmCode}
            style={styles.button}
          />

          <Pressable style={styles.resendButton} hitSlop={8}>
            <Text style={styles.secondaryAction}>
              {authContent.otp.secondaryAction}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default OtpVerificationScreen;
