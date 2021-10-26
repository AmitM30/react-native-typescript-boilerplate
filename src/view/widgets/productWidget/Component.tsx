import * as React from 'react';
import { View } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { Card } from '../../elements/layout';
import ProductDisplay from '../productDisplay';
import router from '../../../navigators/router';
import { SectionTitle } from '../../elements/section/title';
import { Product } from '../../../../shared/redux/types/search/ISearchResponse';

interface Props {
  title: string;
  price?: string;
  imageUrl?: string;
  subtitle?: string;
  componentId: string;
  productList: Product[];
}

const ProductWidget: React.FC<Props> = ({ title, subtitle, componentId, productList }: Props) => (
  <Card>
    <SectionTitle
      title={title}
      subTitle={subtitle}
      onClick={() => router.showListingsScreen({ componentId, passProps: { query: 'Bang Olufsen' } }, title)} />
    <View style={GLOBAL.LAYOUT.row}>
      {productList && productList.length > 0 && productList.slice(0, 2).map(
        (product, index) => <ProductDisplay key={`widget_product-${index}`} componentId={componentId} title={product.name.substr(0, 30)} price={product.price} imageUrl={product.image} />)
      }
    </View>
  </Card>
);

export default ProductWidget;
