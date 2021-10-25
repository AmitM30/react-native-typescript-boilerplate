import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { Dimensions, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

import SVGIcons from '../../assets/svgs';
import Header from '../../widgets/header';
import { GLOBAL } from '../../styles/global';
import { CImage } from '../../elements/atoms';
import locale from '../../../constants/locale';
import router from '../../../navigators/router';
import { Carousel } from '../../elements/layout';
import { SCREENS } from '../../../constants/screen';
import { SearchInput } from '../../elements/search';
import CategoryWidget from '../../widgets/category';
import { TYPOGRAPHY } from '../../styles/typography';
import ProductWidget from '../../widgets/productWidget';
import { CText, CTextInput } from '../../elements/inputs';
import { SectionTitle } from '../../elements/section/title';
import { Product, SearchResponse } from '../../../../shared/redux/types/search/ISearchResponse';
import { BUTTON_CATEGORY, BUTTON_PRIMARY, BUTTON_SECONDARY } from '../../elements/buttons';

import { Props } from './index';

interface State {
  name: string;
  carouselItems: any;
  bestSelling: Array<Product>;
}

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      name: props.name || 'Redux + TypeScript + React Native Navigation',
      carouselItems: [
        { url: 'https://i.pinimg.com/originals/2e/3a/29/2e3a290bef775346cdf97d810685d5ef.jpg' },
        { url: 'https://i.pinimg.com/originals/f9/a8/f1/f9a8f1d12e769c5a6a33948b7a611028.jpg' },
      ],
      bestSelling: [],
    };
  }

  componentDidMount = async () => {
    // console.log('>>> MOUNT <<<');
    const { loadBestSelling } = this.props;
    const data: SearchResponse = await loadBestSelling();
    this.setState({ bestSelling: data.results });
  }

  // componentDidAppear() {
  //   console.log('>>> APPEAR <<<');
  // }

  componentWillUnmount() {

  }

  showBurgerMenu () {
    router.showDrawer();
  }

  showPushScreen = () => {
    const { componentId } = this.props;
    router.showPushScreen({
      componentId,
      passProps: {
        dummyText: 'Dummy Title',
      },
    });
  }

  showCartScreen = () => {
    const { componentId } = this.props;
    router.showCartScreen({ componentId });
  }

  showSearchScreen = () => {
    const { componentId } = this.props;
    router.showSearchScreen({ componentId });
  }

  showModal = () => {
    router.showModal(SCREENS.Dummy2, SCREENS.Dummy2);
  }

  renderHeader = () => (
    <TouchableOpacity onPress={this.showCartScreen}>
      <CImage path={require('../../assets/images/cart.png')} style={{
        width: 36,
        height: 36,
        alignSelf: 'flex-end',
        marginHorizontal: 6,
      }} />
    </TouchableOpacity>
  )

  renderCarouselItem = ({ item, index }: any) => {
    return (
      <CImage
        key={`home-carousel-item-${index}`}
        style={{ width: Dimensions.get('screen').width, height: 200 }}
        uri={item.url}
      />
    );
  }

  addItemToCart = () => {
    const { addItemToCart } = this.props;
    addItemToCart({ sku: 'some_sku_123' });
  }

  render() {
    const { text, componentId, cart } = this.props;
    const { carouselItems, bestSelling } = this.state;

    return (
      <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
        {/* {this.renderHeader()} */}
        <ScrollView style={GLOBAL.LAYOUT.pageContainer} showsVerticalScrollIndicator={false}>
          <Header inputDisabled={true} onClick={this.showSearchScreen} />
          <CategoryWidget componentId={componentId} />
          <ProductWidget productList={bestSelling} title={locale.BestSelling} subtitle={locale.SeeAll} componentId={componentId} />
          <Carousel data={carouselItems} item={this.renderCarouselItem} />


          <CText>{text}</CText>
          <CImage uri={'sample'} style={{
            width: 36,
            height: 36,
            alignSelf: 'flex-end',
          }} />

          {/* <CImage
            style={{ width: 100, height: 70 }}
            uri='https://i.pinimg.com/originals/eb/c5/d0/ebc5d040c8ff5fff0e623d44b337e0fa.jpg'
          /> */}

          {/* <List /> */}
          <BUTTON_PRIMARY onClick={this.addItemToCart} title={`${locale.AddToCart} ${cart.items.length}`} />
          
          <CategoryWidget componentId={componentId} />
          <BUTTON_PRIMARY onClick={this.showPushScreen} title={'Push Screen'} />
          <BUTTON_SECONDARY onClick={this.showModal} title={'Show Modal'} />
          <SectionTitle title={locale.Categories} subTitle={locale.SeeAll} />
          <CText style={GLOBAL.FONTS.title}>{locale.Categories}</CText>
          <CText style={GLOBAL.FONTS.subTitle}>{locale.SeeAll}</CText>
          <CText style={GLOBAL.FONTS.body}>{'Bang and Olufsen'}</CText>
          <SVGIcons.Search />
          <CTextInput />
          <BUTTON_CATEGORY onClick={this.showModal} icon={<SVGIcons.CategoryIcons.Shoes />} />
          <BUTTON_CATEGORY onClick={this.showModal} icon={<SVGIcons.CategoryIcons.Stileto />} />
          <BUTTON_CATEGORY onClick={this.showModal} icon={<SVGIcons.CategoryIcons.Bulb />} />
          <BUTTON_CATEGORY
            onClick={this.showModal}
            style={GLOBAL.CTA.Style.cameraIcon}
            hideShadow={true}
            icon={<SVGIcons.Camera
              color={GLOBAL.CTA.Style.cameraIcon.color}
              style={TYPOGRAPHY.BUTTON.cameraIcon}
            />}
          />
          <CText style={[GLOBAL.FONTS.price]}>{'$755'}</CText>
          <SearchInput disabled />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;
