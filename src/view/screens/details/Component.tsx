import * as React from 'react';
import { SafeAreaView, View } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { CText } from '../../elements/inputs';

export interface Props {
  componentId: string;
}

const ProductDetails: React.FC<Props> = ({ componentId }: Props) => {

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <View style={GLOBAL.LAYOUT.pageContainer}>
        <CText>{'Produt Details'}</CText>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
