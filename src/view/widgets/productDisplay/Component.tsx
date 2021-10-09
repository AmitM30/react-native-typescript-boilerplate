import * as React from 'react';
import { View } from 'react-native';

import { CImage } from '../../elements/atoms';
import { CText } from '../../elements/inputs';
import { GLOBAL } from '../../styles/global';
import { TYPOGRAPHY } from '../../styles/typography';

interface Props {
  imageUrl?: string;
  title?: string;
  subtitle?: string;
  price?: string;
}

const ProductDisplay: React.FC<Props> = (props: Props) => {

  return (
    <View style={TYPOGRAPHY.ELEMENTS.ProductDisplay}>
      <CImage
        style={{ width: '100%', height: 288 }}
        uri={'https://i.pinimg.com/originals/eb/c5/d0/ebc5d040c8ff5fff0e623d44b337e0fa.jpg'}
      />
      <CText style={GLOBAL.FONTS.subTitle}>{'BeoPlay Speaker'}</CText>
      <CText style={GLOBAL.FONTS.body}>{'Bang and Olufsen'}</CText>
      <CText style={[GLOBAL.FONTS.price]}>{'$755'}</CText>
    </View>
  );
};

export default ProductDisplay;
