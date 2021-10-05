import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { SafeAreaView, TouchableOpacity, Image, View } from 'react-native';

import styles from './styles';
import { CText, CTextInput } from '../../elements/custom';
import { BUTTON_CATEGORY, BUTTON_PRIMARY, BUTTON_SECONDARY } from '../../elements/buttons';
import { SCREENS } from '../../../constants/screen';
import router from '../../../navigators/router';
import { GLOBAL } from '../../styles/global';
import SVGIcons from '../../assets/svgs'
import { TYPOGRAPHY } from '../../styles/typography';

// import List from  '../../widgets/sectionList';

export interface Props {
  name: string;
  componentId: string;
  text: string;
}

interface State {
  name: string;
  text: string;
}

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      name: props.name || 'Redux + TypeScript + React Native Navigation',
      text: props.text,
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
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../assets/images/cart.png')}
      />
    </TouchableOpacity>
  )

  render() {
    const { text } = this.state;

    return (
      <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
        {this.renderHeader()}
        <View style={GLOBAL.LAYOUT.pageContainer}>
          <CText>{'Home'}</CText>
          <CText>{text}</CText>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{ uri: 'sample' }}
          />
          {/* <List /> */}
          <BUTTON_PRIMARY onClick={this.showPushScreen} title={'Push Screen'} style={styles.button} />
          <BUTTON_SECONDARY onClick={this.showModal} title={'Show Modal'} style={styles.button} />
          <CText style={GLOBAL.FONTS.title}>{'Categories'}</CText>
          <CText style={GLOBAL.FONTS.subTitle}>{'See all'}</CText>
          <CText style={GLOBAL.FONTS.body}>{'Bang and Olufsen'}</CText>
          <SVGIcons.Search color={TYPOGRAPHY.COLOR.Primary} />
          <CTextInput />
          <BUTTON_CATEGORY onClick={this.showModal} icon={<SVGIcons.CategoryIcons.Shoes />} />
          <BUTTON_CATEGORY onClick={this.showModal} icon={<SVGIcons.CategoryIcons.Stileto />} />
          <BUTTON_CATEGORY onClick={this.showModal} icon={<SVGIcons.CategoryIcons.Bulb />} />
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
