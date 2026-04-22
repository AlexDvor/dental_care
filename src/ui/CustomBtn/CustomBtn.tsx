import { Text, TouchableOpacity } from 'react-native';
import { CustomBtnProps } from './CustomBtn.types';
import { styles } from './CustomBtn.styles';

const CustomBtn = ({ title }: CustomBtnProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;
