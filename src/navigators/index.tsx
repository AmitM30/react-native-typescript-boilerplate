import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import store from '../../shared/redux/store';
import { registerScreens } from '../view/screens';
import { showSplash } from './navigation';

/**
 * Register screens and components for react native navigation
 */
registerScreens({ store, Provider });

const app = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
      topBar: { visible: true },
    });

    showSplash();
  });
};

export default app;
