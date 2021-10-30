import * as React from 'react';
import { Pressable } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { CImage } from '../../elements/atoms';
import { CText } from '../../elements/inputs';
import router from '../../../navigators/router';
import { TYPOGRAPHY } from '../../styles/typography';

interface Props {
  title: string;
  price: number;
  imageUrl: string;
  brand?: string;
  subtitle?: string;
  componentId: string;
}

const ProductDisplay: React.FC<Props> = (props: Props) => {
  const { title, brand, price, imageUrl, componentId } = props;
  const fallbackImage = 'https://i.pinimg.com/originals/eb/c5/d0/ebc5d040c8ff5fff0e623d44b337e0fa.jpg';
  const onPress = () => router.showDetailsScreen({ componentId }, title);

  return (
    <Pressable style={TYPOGRAPHY.ELEMENTS.ProductDisplay} onPress={onPress}>
      <CImage
        style={{ width: '100%', height: 288 }}
        uri={imageUrl || fallbackImage}
      />
      <CText style={GLOBAL.FONTS.subTitle}>{title}</CText>
      <CText style={GLOBAL.FONTS.body}>{brand || 'Bang and Olufsen'}</CText>
      <CText style={[GLOBAL.FONTS.price]}>{`$${price}`}</CText>
    </Pressable>
  );
};

export default ProductDisplay;
