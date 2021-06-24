import * as React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { SCREENS } from '../../constants/screen';

import * as Splash from './splash';
import * as Home from './home';
import * as Settings from './settings';
import * as Drawer from './drawer';
import * as Dummy from './dummy';
import * as Dummy2 from './dummy2';
import * as Dummy3 from './dummy3';
import * as Search from './search';
import * as Cart from './cart';

const registerComponentWithRedux = (redux: any) => (
  name: string,
  screen: any,
) => {
  Navigation.registerComponent(
    name,
    () => (props: any) => (
      <Provider store={redux.store}>
        <screen.default {...props} />
      </Provider>
    ),
    () => screen.default);
};

export function registerScreens(redux: any) {
  registerComponentWithRedux(redux)(SCREENS.Splash, Splash);
  registerComponentWithRedux(redux)(SCREENS.Home, Home);
  registerComponentWithRedux(redux)(SCREENS.Settings, Settings);
  registerComponentWithRedux(redux)(SCREENS.Drawer, Drawer);
  registerComponentWithRedux(redux)(SCREENS.Dummy, Dummy);
  registerComponentWithRedux(redux)(SCREENS.Search, Search);
  registerComponentWithRedux(redux)(SCREENS.Cart, Cart);
  registerComponentWithRedux(redux)(SCREENS.Dummy2, Dummy2);
  registerComponentWithRedux(redux)(SCREENS.Dummy3, Dummy3);
}
