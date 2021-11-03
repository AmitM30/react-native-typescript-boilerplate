import * as React from 'react';
import { View, Image, SafeAreaView } from 'react-native';

import styles from './styles';
import { GLOBAL } from '../../styles/global';
import { BUTTON_DEFAULT } from '../../elements/buttons';
import { tabbedNavigation } from '../../../navigators/navigation';

import { Props } from './index';

const SPLASH: React.FC<Props> = (props: Props) => {

  React.useEffect(() => {
    const { splashLaunched } = props;
    splashLaunched();
  },              []);

  const navigateToHome = () => {
    tabbedNavigation();
  };

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={require('../../assets/images/rnn2.png')}
        />
        <Image
          resizeMode={'center'}
          source={require('../../assets/images/rn_ts.png')}
        />
        <BUTTON_DEFAULT
          title={'Continue To App'}
          onClick={navigateToHome}
        />
      </View>
    </SafeAreaView>
  );
};

export default SPLASH;
