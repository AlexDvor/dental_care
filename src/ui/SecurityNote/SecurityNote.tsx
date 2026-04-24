import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './SecurityNote.styles';
import { Icon } from '../Icon/Icon';
import { Theme } from '../../constants/colors';

type Props = {
  text?: string;
};

const SecurityNote = ({
  text = 'Your information is secure and encrypted',
}: Props) => {
  return (
    <View style={styles.container}>
      <Icon name="lock" size={14} color={Theme.colors.text.secondary} />

      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default SecurityNote;
