import * as React from 'react';
import { View } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { Card } from '../../elements/layout';
import ProductDisplay from '../productDisplay';
import router from '../../../navigators/router';
import { SCREENS } from '../../../constants/screen';
import { SectionTitle } from '../../elements/section/title';

interface Props {
  title: string;
  price?: string;
  imageUrl?: string;
  subtitle?: string;
  componentId: string;
}

const onClick = (componentId: string) => {
  router.push({ componentId }, SCREENS.Listings);
};

const ProductWidget: React.FC<Props> = ({ title, subtitle, componentId }: Props) => {

  return (
    <Card>
      <SectionTitle title={title} subTitle={subtitle} onClick={() => onClick(componentId)} />
      <View style={GLOBAL.LAYOUT.row}>
        <ProductDisplay />
        <ProductDisplay />
      </View>
    </Card>
  );
};

export default ProductWidget;
