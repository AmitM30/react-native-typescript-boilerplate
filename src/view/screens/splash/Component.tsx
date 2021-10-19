import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { View, SafeAreaView, Pressable } from 'react-native';

import styles from './styles';
import { GLOBAL } from '../../styles/global';
import { CImage } from '../../elements/atoms';
import router from '../../../navigators/router';
import { BUTTON_SECONDARY } from '../../elements/buttons';
import { tabbedNavigation } from '../../../navigators/navigation';

export interface Props {
  splashLaunched: Function;
  componentId: string;
}

interface State {}

class Splash extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { splashLaunched } = this.props;
    splashLaunched();
  }

  navigateToHome = () => {
    tabbedNavigation();
  }

  showBurgerMenu () {
    Navigation.mergeOptions('drawerComponentId', {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  }

  pushToScreen = () => {
    const { componentId } = this.props;
    router.showPushScreen({ componentId });
  }

  render() {
    return (
      <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
        <Pressable onPress={this.showBurgerMenu}>
          <CImage
            style={styles.menu}
            path={require('../../assets/images/burger-menu.png')}
          />
        </Pressable>
        <View style={styles.container}>
          <CImage
            style={styles.image}
            resizeMode={'contain'}
            path={require('../../assets/images/rnn2.png')}
          />
          <CImage
            resizeMode={'center'}
            path={require('../../assets/images/rn_ts.png')}
          />
          <BUTTON_SECONDARY
            title={'Continue'}
            onClick={this.navigateToHome}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Splash;
