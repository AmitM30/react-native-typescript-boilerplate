import * as React from 'react';
import { TouchableOpacity, ViewStyle, StyleSheet } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { CImage } from '../atoms';

type Callback = () => any;
interface Props {
  onClick: Callback;
  style?: ViewStyle;
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

/**
 * Cart Button
 */
const CART: React.FC<Props> = ({ onClick }: Props) => (
  <TouchableOpacity
    onPress={onClick}
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
  >
    <CImage
      style={styles.icon}
      path={require('../../assets/images/cart.png')}
    />
  </TouchableOpacity>
);

export default CART;
