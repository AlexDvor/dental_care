import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Theme } from '../../constants/theme';
import { Icon } from '../Icon/Icon';
import { TrustBlockProps } from './TrustBlock.interface';

import { styles } from './TrustBlock.style';

const ICON_SIZE = 35;

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
          <React.Fragment key={item.label}>
            <View style={styles.item}>
              <View
                style={[
                  styles.itemBackground,
                  {
                    backgroundColor: item.bg || Theme.colors.background.soft,
                  },
                ]}
              >
                <View style={styles.iconHalo}>
                  <LinearGradient
                    colors={[
                      Theme.colors.background.card,
                      item.bg || Theme.colors.background.soft,
                    ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.iconWrapper}
                  >
                    <Icon
                      name={item.icon}
                      size={ICON_SIZE}
                      color={item.color || Theme.colors.icon.primary}
                    />
                  </LinearGradient>
                </View>

                <View style={styles.itemTextBlock}>
                  <Text style={styles.title}>{item.label}</Text>
                  {!!item.subLabel && (
                    <Text style={styles.subtitle}>{item.subLabel}</Text>
                  )}
                </View>
              </View>
            </View>

            {index !== items.length - 1 && <View style={styles.divider} />}
          </React.Fragment>
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
        <TouchableOpacity onPress={onPrivacyPress} hitSlop={8}>
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>

        <View style={styles.linkDivider} />

        <TouchableOpacity onPress={onTermsPress} hitSlop={8}>
          <Text style={styles.link}>Terms of Service</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrustBlock;
