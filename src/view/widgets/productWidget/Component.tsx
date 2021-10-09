import * as React from 'react';
import { View } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { Card } from '../../elements/layout';
import router from '../../../navigators/router'
import { SCREENS } from '../../../constants/screen';
import ProductDisplay from '../productDisplay/Component';
import { SectionTitle } from '../../elements/section/title';

interface Props {
  title?: string;
  price?: string;
  imageUrl?: string;
  subtitle?: string;
}

const onClick = () => {
  router.push({ componentId: SCREENS.Listings });
}

const ProductWidget: React.FC<Props> = (props: Props) => {

  return (
    <Card>
      <SectionTitle title={'Best Selling'} subTitle={'See all'} onClick={onClick} />
      <View style={GLOBAL.LAYOUT.row}>
        <ProductDisplay />
        <ProductDisplay />
      </View>
    </Card>
  )
}

export default ProductWidget;
