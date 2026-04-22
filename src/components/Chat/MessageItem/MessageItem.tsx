import { Text, View, Image } from 'react-native';
import React from 'react';
import { MessageItemProps } from './MessageItem.interface';
import { styles } from './MessageItem.style';

const MessageItem = ({ avatar, date, message, name }: MessageItemProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.ms}>{message}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{date}</Text>
        <View style={styles.wrapMessage}>
          <Text style={styles.quantityMs}>{1}</Text>
        </View>
      </View>
    </View>
  );
};

export default MessageItem;
