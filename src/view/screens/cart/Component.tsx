import * as React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';
import { CText } from '../../elements/custom';

export interface Props {
  componentId: string;
}

const Cart = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <CText>Cart</CText>
    </SafeAreaView>
  );
};

export default Cart;
