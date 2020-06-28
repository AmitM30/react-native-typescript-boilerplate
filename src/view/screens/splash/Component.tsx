import * as React from 'react';
import { View, Image, SafeAreaView } from 'react-native';

import { tabbedNavigation } from '../../../navigators/navigation';
import { SplashView, SplashImage } from './elements';
import { BUTTON_DEFAULT } from '../../elements/buttons';
export interface Props {}

interface State {}

class Splash extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  navigateToHome = () => {
    tabbedNavigation();
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <SplashView>
          <SplashImage resizeMode='contain' source={require('../../assets/images/rnn2.png')} />
          <Image resizeMode='center' source={require('../../assets/images/rn_ts.png')} />
          <BUTTON_DEFAULT title='Continue To sApp' onClick={this.navigateToHome} />
        </SplashView>
      </SafeAreaView>
    );
  }
}

export default Splash;
