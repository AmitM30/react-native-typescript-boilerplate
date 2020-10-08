import { Navigation } from 'react-native-navigation';

import store from '../../shared/redux/store';
import { registerScreens } from '../view/screens';
import { showSplash } from './navigation';

/**
 * Register screens and components for react native navigation
 */
registerScreens({ store });

/**
 * Entry point for the app
 * showSplash() -> As the name suggests, shows the splash screen.
 *                 If you do not want a splash screen, directly call `tabbedNavigation()`
 *                 defined in './navigation'
 */
const app = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
      /**
       * Add default options right here
       */
      topBar: { visible: true, elevation: 0 },
    });

    showSplash();
  });
};

export default app;
