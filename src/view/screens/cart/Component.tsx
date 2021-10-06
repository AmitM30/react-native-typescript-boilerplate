import * as React from 'react';
import { SafeAreaView, View } from 'react-native';

import styles from './styles';
import { CText } from '../../elements/inputs';
import { GLOBAL } from '../../styles/global';

export interface Props {
  componentId: string;
}

const Cart: React.FC<Props> = (props: Props) => (
  <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
    <View style={GLOBAL.LAYOUT.pageContainer}>
      <CText>Cart</CText>
    </View>
  </SafeAreaView>
);

export default Cart;
