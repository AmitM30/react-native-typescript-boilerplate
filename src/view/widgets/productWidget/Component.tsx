import * as React from 'react';
import { View } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { Card } from '../../elements/layout';
import ProductDisplay from '../productDisplay';
import router from '../../../navigators/router';
import { SectionTitle } from '../../elements/section/title';

interface Props {
  title: string;
  price?: string;
  imageUrl?: string;
  subtitle?: string;
  componentId: string;
}

const ProductWidget: React.FC<Props> = ({ title, subtitle, componentId }: Props) => (
  <Card>
    <SectionTitle
      title={title}
      subTitle={subtitle}
      onClick={() => router.showListingsScreen({ componentId }, title)} />
    <View style={GLOBAL.LAYOUT.row}>
      <ProductDisplay />
      <ProductDisplay />
    </View>
  </Card>
);

export default ProductWidget;
