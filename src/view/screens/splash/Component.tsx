import * as React from 'react';
import { View, Image, SafeAreaView, Pressable } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { tabbedNavigation } from '../../../navigators/navigation';
import styles from './styles';
import { BUTTON_DEFAULT } from '../../elements/buttons';
import ROUTER from '../../../navigators/router';

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
    ROUTER.showPushScreen({ componentId });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Pressable onPress={this.showBurgerMenu}>
          <Image
            style={styles.menu}
            resizeMode="contain"
            source={require('../../assets/images/burger-menu.png')}
          />
        </Pressable>
        <View style={styles.container}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../../assets/images/rnn2.png')}
          />
          <Image
            resizeMode="center"
            source={require('../../assets/images/rn_ts.png')}
          />
          <BUTTON_DEFAULT
            title="Continue To App"
            onClick={this.navigateToHome}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Splash;
