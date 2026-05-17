import React from 'react';
import { Text, View } from 'react-native';

import { Theme } from '../../constants/theme';
import { Icon } from '../Icon/Icon';
import { SecurityNoteProps } from './SecurityNote.interface';

import { styles } from './SecurityNote.styles';

const SecurityNote = ({
  text = 'Your information is secure and encrypted',
}: SecurityNoteProps) => {
  return (
    <View style={styles.container}>
      <Icon name="lock" size={15} color={Theme.colors.text.secondary} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default SecurityNote;
