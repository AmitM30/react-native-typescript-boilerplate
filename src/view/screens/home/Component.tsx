import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { Category } from '../../widgets/category';
import locale from '../../../constants/locale';
import router from '../../../navigators/router';
import { BUTTON_DEFAULT } from '../../elements/buttons';
import { CTEXT, CTEXTINPUT } from '../../elements/custom';

import { Props } from './index';

interface State {
  name: string;
}

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      name: props.name || 'Redux + TypeScript + React Native Navigation',
    };
  }

  componentDidMount() {}

  showBurgerMenu () {
    Navigation.mergeOptions('drawerComponentId', {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  }

  showPushScreen = () => {
    const { componentId } = this.props;
    router.showPushScreen({
      componentId,
      passProps: {
        dummyText: 'Hello from Home !!!',
      },
    });
  }

  render() {
    const { name } = this.state;
    const { componentId } = this.props;

    return (
      <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
        <ScrollView style={GLOBAL.LAYOUT.pageContainer}>
          <TouchableOpacity onPress={this.showBurgerMenu}>
            <Image
              style={{ marginBottom: 20, width: 40, height: 40 }}
              resizeMode={'contain'}
              source={require('../../assets/images/burger-menu.png')}
            />
          </TouchableOpacity>
          <Category componentId={componentId} title={locale.Categories} />
          <CTEXT>{locale.Home}</CTEXT>
          <CTEXT>{name}</CTEXT>
          <CTEXTINPUT />
          <BUTTON_DEFAULT onClick={this.showPushScreen} title={'Push Screen'} style={{
            alignSelf: 'center',
            marginTop: 50,
            width: 250,
          }} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;
