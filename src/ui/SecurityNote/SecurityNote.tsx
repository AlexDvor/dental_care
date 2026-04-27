import React from 'react';
import { Text,View } from 'react-native';

import { Theme } from '../../constants/colors';
import { Icon } from '../Icon/Icon';

import { styles } from './SecurityNote.styles';

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
