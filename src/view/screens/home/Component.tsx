import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { Dimensions, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

import SVGIcons from '../../assets/svgs';
import Header from '../../widgets/header';
import { GLOBAL } from '../../styles/global';
import { CImage } from '../../elements/atoms';
import router from '../../../navigators/router';
import { Carousel } from '../../elements/layout';
import { SCREENS } from '../../../constants/screen';
import { SearchInput } from '../../elements/search';
import CategoryWidget from '../../widgets/category';
import { TYPOGRAPHY } from '../../styles/typography';
import ProductWidget from '../../widgets/productWidget';
import { CText, CTextInput } from '../../elements/inputs';
import { SectionTitle } from '../../elements/section/title';
import { BUTTON_CATEGORY, BUTTON_PRIMARY, BUTTON_SECONDARY } from '../../elements/buttons';

import { Props } from './index';

interface State {
  name: string;
  carouselItems: any;
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
    };
  }

  componentDidMount() {
    // console.log('>>> MOUNT <<<');
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
    const { carouselItems } = this.state;

    return (
      <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
        {/* {this.renderHeader()} */}
        <ScrollView style={GLOBAL.LAYOUT.pageContainer} showsVerticalScrollIndicator={false}>
          <Header inputDisabled={true} onClick={this.showSearchScreen} />
          <CategoryWidget />
          <ProductWidget title={'Best Selling'} subtitle={'See all'} componentId={componentId} />
          <Carousel data={carouselItems} item={this.renderCarouselItem} />


          <CText>{text}</CText>
          <CImage uri={'sample'} style={{
            width: 36,
            height: 36,
            alignSelf: 'flex-end',
            marginHorizontal: 6,
          }} />

          {/* <CImage
            style={{ width: 100, height: 70 }}
            uri='https://i.pinimg.com/originals/eb/c5/d0/ebc5d040c8ff5fff0e623d44b337e0fa.jpg'
          /> */}

          {/* <List /> */}
          <BUTTON_PRIMARY onClick={this.addItemToCart} title={`Add To Cart ${cart.items.length}`} />
          
          <CategoryWidget />
          <BUTTON_PRIMARY onClick={this.showPushScreen} title={'Push Screen'} />
          <BUTTON_SECONDARY onClick={this.showModal} title={'Show Modal'} />
          <SectionTitle title={'Categories'} subTitle={'See all'} />
          <CText style={GLOBAL.FONTS.title}>{'Categories'}</CText>
          <CText style={GLOBAL.FONTS.subTitle}>{'See all'}</CText>
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
