import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './SearchInput.style';
import { Icon } from '../Icon/Icon';

type Props = {
  value: string;
  onChange: (text: string) => void;
};

const SearchInput = ({ value, onChange }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Icon name="search" size={18} color="#9CA3AF" />

        <TextInput
          placeholder="Search doctor..."
          value={value}
          onChangeText={onChange}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default SearchInput;
