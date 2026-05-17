import { StyleProp, ViewStyle } from 'react-native';

export interface StatsCardProps {
  style?: StyleProp<ViewStyle>;
  layout?: 'row' | 'column';
  visitsCount?: number;
  upcomingCount?: number;
  isLoading?: boolean;
}
