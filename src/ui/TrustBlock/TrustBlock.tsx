import React from 'react';
import { Text, TouchableOpacity,View } from 'react-native';

import { Theme } from '../../constants/colors';
import { Icon } from '../Icon/Icon';
import { TrustBlockProps } from './TrustBlock.inteface';

import { styles } from './TrustBlock.style';

const TrustBlock = ({
  items,
  brandName,
  description,
  onPrivacyPress,
  onTermsPress,
}: TrustBlockProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {items.map((item, index) => (
          <View key={index} style={styles.item}>
            <View style={styles.iconWrapper}>
              <Icon
                name={item.icon}
                size={28}
                color={item.color || Theme.colors.primary.main}
              />
            </View>

            <Text style={styles.label}>{item.label}</Text>

            {index !== items.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
      </View>

      <View style={styles.separator} />

      <View style={styles.brandRow}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>{brandName[0]}</Text>
        </View>

        <Text style={styles.brand}>{brandName}</Text>
      </View>

      <Text style={styles.description}>{description}</Text>

      <View style={styles.links}>
        <TouchableOpacity onPress={onPrivacyPress}>
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>

        <Text style={styles.dot}>|</Text>

        <TouchableOpacity onPress={onTermsPress}>
          <Text style={styles.link}>Terms of Service</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrustBlock;
