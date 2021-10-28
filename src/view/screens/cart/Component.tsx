import * as React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { BottomTabPressedEvent, Navigation } from 'react-native-navigation';

import { Card } from '../../elements/layout';
import { GLOBAL } from '../../styles/global';
import { CText } from '../../elements/inputs';
import locale from '../../../constants/locale';
import CartItem from '../../widgets/cartItem/Component';
import BottomControl from '../../widgets/bottomControl/Component';
import { Product, SearchResponse } from '../../../../shared/redux/types/search/ISearchResponse';

import { Props } from './index';

const Cart: React.FC<Props> = ({ componentId, cartViewed }: Props) => {
  const [items, setItems]: [SearchResponse, React.Dispatch<any>] = React.useState({ results: [] });

  React.useEffect(() => {
    Navigation.events().registerBottomTabPressedListener(async (event: BottomTabPressedEvent) => {
      if (event.tabIndex === 2) {
        const data = await cartViewed();
        setItems(data);
      }
    });
  }, []);

  const renderPriceDetails = () => (
    <View style={GLOBAL.ELEMENTS.PriceSection}>
      <Card style={GLOBAL.LAYOUT.row}>
        <CText style={GLOBAL.FONTS.body}>{locale.SubTotal}</CText>
        <CText style={GLOBAL.FONTS.subTitle}>$3950</CText>
      </Card>
      <View style={GLOBAL.LAYOUT.row}>
        <CText style={GLOBAL.FONTS.body}>{locale.Tax}</CText>
        <CText style={GLOBAL.FONTS.subTitle}>$50</CText>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[GLOBAL.LAYOUT.SafeArea]}>
      <ScrollView style={[GLOBAL.LAYOUT.pageContainer, GLOBAL.LAYOUT.cart]} showsVerticalScrollIndicator={false}>
        {items.results && items.results.length > 0 && items.results.map(
          (item: Product) => <CartItem key={item.id} product={item} componentId={componentId} />
        )}
        {renderPriceDetails()}
      </ScrollView>
      <BottomControl
        componentId={componentId}
        rightButtonText={locale.Checkout}
        onSubmitRight={() => { }}
        left={{ price: 4500, priceText: locale.Total }}
      />
    </SafeAreaView>
  );
}

export default Cart;
