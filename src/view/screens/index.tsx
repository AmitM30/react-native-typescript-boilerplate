import { Navigation } from 'react-native-navigation';

import Screens from '../../constants/screen';

import Splash from './splash';
import Home from './home';

const registerComponentWithRedux = redux => (name, component) => {
  Navigation.registerComponentWithRedux(name, () => component, redux.Provider, redux.store);
};

export default function registerScreens(redux) {
  registerComponentWithRedux(redux)(Screens.Home, Home);
  registerComponentWithRedux(redux)(Screens.Splash, Splash);
  // registerComponent(redux)(Screens.Splash, Splash);
}
