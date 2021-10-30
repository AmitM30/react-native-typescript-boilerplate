import * as React from 'react';
import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';
import { Alert, Dimensions, Image, SafeAreaView, ScrollView, View } from 'react-native';

import SVGIcons from '../../assets/svgs';
import { Card } from '../../elements/layout';
import { GLOBAL } from '../../styles/global';
import { CText } from '../../elements/inputs';
import locale from '../../../constants/locale';
import { PillLight } from '../../elements/atoms';
import { TYPOGRAPHY } from '../../styles/typography';
import BottomControl from '../../widgets/bottomControl';
import { ProductResponse } from '../../../../shared/redux/types/search/IProductResponse';
import { ACTION_BUTTONS } from '../../../constants/screen';

import { Props } from './index';

const ProductDetails: NavigationFunctionComponent<Props> = ({ componentId, getDetail, addItemToCart }: Props) => {
  const [product, setProduct]: [ProductResponse | undefined, React.Dispatch<any>] = React.useState<ProductResponse>();

  const getAPIdata = async (text: string) => {
    const response = await getDetail(text);
    setProduct(response);
  };

  React.useEffect(() => {
    getAPIdata('B085R59TVK');
    const navigationButtonEventListener = Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
      if (buttonId === ACTION_BUTTONS.AddToWishlist) {
        Alert.alert(`${product?.name}`, locale.AddedToWishlist);
      }
    });

    return () => { navigationButtonEventListener.remove() };
  }, [product]);

  const addToCart = () => {
    if (product) {
      addItemToCart({ sku: product?.id });
      Alert.alert(`${product.name}`, locale.AddedToCart);
    }
  }

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <ScrollView style={GLOBAL.LAYOUT.details} showsVerticalScrollIndicator={false}>
        {product && (
          <>
            <Image
              style={{ width: '100%', height: Dimensions.get('screen').height * 0.60 }}
              source={{ uri: product.images[0] }}
            />
            <View style={[GLOBAL.LAYOUT.pageContainer, GLOBAL.LAYOUT.detailsContainer]}>
              <Card>
                <CText style={GLOBAL.FONTS.title}>{product?.name}</CText>
              </Card>
              <Card style={[GLOBAL.LAYOUT.row]}>
                <PillLight left={'Watts'} right={<CText style={GLOBAL.TEXT.Bold}>{'40'}</CText>} />
                <PillLight left={'Colour'} right={
                  <SVGIcons.RoundedSquare color={TYPOGRAPHY.COLOR.DefaultBlue} />
                } />
              </Card>
              <CText style={GLOBAL.FONTS.subTitle}>{locale.Details}</CText>
              <CText style={[GLOBAL.FONTS.body, { lineHeight: 26 }]}>{product.small_description}</CText>
            </View>
          </>
        )}
      </ScrollView>
      <BottomControl
        componentId={componentId}
        rightButtonText={locale.Add}
        onSubmitRight={addToCart}
        showLeftButton={false}
        left={{ price: 1500, priceText: locale.Price }}

        // // To show left button
        // showLeftButton={true}
        // leftButton={{ title: 'Cancel', onSubmitLeft: () => { } }}
        
        // // To show text on left side
        // showLeftButton={false}
        // left={{ text: 'No Filters' }}

        // // To show price on left side
        // showLeftButton={false}
        // left={{ price: 876 }}
      />
    </SafeAreaView>
  );
};
ProductDetails.options = {
  statusBar: {
    backgroundColor: TYPOGRAPHY.COLOR.StatusBar,
  },
  topBar: {
    visible: true,
    drawBehind: true,
    noBorder: true,
    background: {
      color: TYPOGRAPHY.COLOR.StatusBar,
    },
    title: {
      text: ''
    },
    rightButtons: [
      {
        id: ACTION_BUTTONS.AddToWishlist,
        icon: require('../../assets/images/star.png'),
        // color: TYPOGRAPHY.COLOR.StatusBar,
      },
      // {
      //   id: ACTION_BUTTONS.CartAB,
      //   component: {
      //     name: ACTION_BUTTONS.CartAB, id: ACTION_BUTTONS.CartAB,
      //     passProps: {
      //       onClick: () => {},
      //     },
      //   },
      // },
    ],
  },
  bottomTabs: {
    visible: false,
  },
}

export default ProductDetails;
