import * as React from 'react';
import { SafeAreaView, TouchableOpacity, View, Image } from 'react-native';

import styles from './styles';
import { CText } from '../../elements/custom';
// import { BUTTON_DEFAULT } from '../../elements/buttons';
import { Navigation } from 'react-native-navigation';


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
    Navigation.mergeOptions('drawerComponentId', {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  }

  render() {
    const { name } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={this.showBurgerMenu}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../../assets/images/burger-menu.png')}
          />
        </TouchableOpacity>
        <CText>Home</CText>
        <CText>{name}</CText>
      </SafeAreaView>
    );
  }
}

export default Home;
