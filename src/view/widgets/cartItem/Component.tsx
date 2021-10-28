import * as React from 'react';
import { View } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { TYPOGRAPHY } from '../../styles/typography';
import { CImage, Stepper } from '../../elements/atoms';
import { CText, CTextPrice } from '../../elements/inputs';
import { Product } from '../../../../shared/redux/types/search/ISearchResponse';

interface Props {
  product: Product;
  componentId: string;
}

const CartItem: React.FC<Props> = ({ product }: Props) => {
  return (
    <View style={[GLOBAL.LAYOUT.adjascent, GLOBAL.ELEMENTS.CartItem]}>
      <CImage
        style={TYPOGRAPHY.ELEMENTS.CartItem.image}
        uri={product.image}
      />
      <View style={TYPOGRAPHY.ELEMENTS.CartItem.container}>
        <CText style={GLOBAL.FONTS.subTitle}>{product.name}</CText>
        <CTextPrice style={TYPOGRAPHY.ELEMENTS.CartItem.price}>{`$${product.price}`}</CTextPrice>
        <Stepper count={1} />
      </View>
    </View>
  );
};

export default CartItem;
