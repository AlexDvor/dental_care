import React from 'react';
import { TextInput,View } from 'react-native';

import { Icon } from '../Icon/Icon';
import { SearchInputProps } from './SearchInput.interface';

import { styles } from './SearchInput.style';

const SearchInput = ({ value, onChange }: SearchInputProps) => {
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
