import * as React from 'react';
import { TouchableOpacity, ViewStyle, Image, StyleSheet } from 'react-native';

import { GLOBAL } from '../../styles/global';

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
const CART = ({ onClick }: Props) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    onPress={() => onClick()}
  >
    <Image
      style={styles.icon}
      resizeMode="contain"
      source={require('../../assets/images/cart.png')}
    />
  </TouchableOpacity>
);

export default CART;
