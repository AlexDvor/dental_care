import { Text } from 'react-native';

import { styles } from './SubTitle.style';

const SubTitle = ({ title }: { title: string }) => {
  return <Text style={styles.subtitle}>{title}</Text>;
};

export default SubTitle;
