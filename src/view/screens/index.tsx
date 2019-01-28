import { Navigation } from 'react-native-navigation';

import Screens from '../../constants/screen';

import Splash from './splash';
import Home from './home';
import Settings from './settings';

const registerComponentWithRedux = (redux: any) => (name: string, component: any) => {
  Navigation.registerComponentWithRedux(name, () => component, redux.Provider, redux.store);
};

export default function registerScreens(redux: any) {
  registerComponentWithRedux(redux)(Screens.Splash, Splash);
  registerComponentWithRedux(redux)(Screens.Home, Home);
  registerComponentWithRedux(redux)(Screens.Settings, Settings);
}
