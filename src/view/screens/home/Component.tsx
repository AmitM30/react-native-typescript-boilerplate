import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import SVGIcons from '../../assets/svgs'
import { GLOBAL } from '../../styles/global';
import { CImage } from '../../elements/atoms';
import router from '../../../navigators/router';
import { SCREENS } from '../../../constants/screen';
import { SearchInput } from '../../elements/search';
import { TYPOGRAPHY } from '../../styles/typography';
import { CText, CTextInput } from '../../elements/inputs';
import { SectionTitle } from '../../elements/section/title';
import { BUTTON_CATEGORY, BUTTON_PRIMARY, BUTTON_SECONDARY } from '../../elements/buttons';

export interface Props {
  name: string;
  componentId: string;
  text: string;
}

interface State {
  name: string;
}

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      name: props.name || 'Redux + TypeScript + React Native Navigation'
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

  render() {
    const { text } = this.props;

    return (
      <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
        {this.renderHeader()}
        <View style={GLOBAL.LAYOUT.pageContainer}>
          <CText>{'Home'}</CText>
          <CText>{text}</CText>
          <CImage uri={'sample'} style={{
            width: 36,
            height: 36,
            alignSelf: 'flex-end',
            marginHorizontal: 6,
          }} />

          {/* <CImage
            style={{ width: 100, height: 70 }}
            uri='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F2020-Chevrolet-Corvette-Stingray%2F960x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349'
          /> */}

          {/* <List /> */}
          <BUTTON_PRIMARY onClick={this.showPushScreen} title={'Push Screen'} style={styles.button} />
          <BUTTON_SECONDARY onClick={this.showModal} title={'Show Modal'} style={styles.button} />
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
            icon={<SVGIcons.Camera color={GLOBAL.CTA.Style.cameraIcon.color} style={TYPOGRAPHY.BUTTON.cameraIcon} />}
          />
          <CText style={[GLOBAL.FONTS.price]}>{'$755'}</CText>
          <SearchInput disabled />
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
