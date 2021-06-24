import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { SafeAreaView, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import { CText } from '../../elements/custom';
import router from '../../../navigators/router';
import { BUTTON_DEFAULT } from '../../elements/buttons';
import { SCREENS } from '../../../constants/screen';
import ROUTER from '../../../navigators/router';

// import List from  '../../widgets/sectionList';

export interface Props {
  name: string;
  componentId: string;
}

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
    ROUTER.showDrawer();
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

  showCartScreen = () => {
    const { componentId } = this.props;
    ROUTER.showCartScreen({ componentId });
  }

  showModal = () => {
    ROUTER.showModal(SCREENS.Dummy2, SCREENS.Dummy2);
  }

  renderHeader = () => (
    <TouchableOpacity onPress={this.showCartScreen} style={styles.header}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../assets/images/cart.png')}
      />
    </TouchableOpacity>
  );

  render() {
    const { name } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        {this.renderHeader()}
        <CText>Home</CText>
        <CText>{name}</CText>
        {/* <List /> */}
        <BUTTON_DEFAULT onClick={this.showPushScreen} title={'Push Screen'} style={styles.button} />
        <BUTTON_DEFAULT onClick={this.showModal} title={'Show Modal'} style={styles.button} />
      </SafeAreaView>
    );
  }
}

export default Home;
