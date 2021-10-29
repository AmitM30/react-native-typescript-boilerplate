/**
 * Application navigation stacks to be defined here.
 */
import { Navigation } from 'react-native-navigation';

import Store from '../../shared/redux/store';
import { SCREENS } from '../constants/screen';
import { TYPOGRAPHY } from '../view/styles/typography';

export const STATUS_BAR_OPTIONS = {
  hideWithTopBar: true,
  backgroundColor: TYPOGRAPHY.COLOR.StatusBar,
};

/**
 * Stacked Navigation
 */
export const showSplash = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: SCREENS.Drawer,
            id: 'drawerComponentId',
          },
        },
        center: {
          stack: {
            children: [
              {
                component: {
                  id: SCREENS.Splash,
                  name: SCREENS.Splash,
                  options: {
                    statusBar: STATUS_BAR_OPTIONS,
                    topBar: {
                      visible: false
                    }
                  },
                },
              },
            ],
          },
        },
      },
    },
  });
};

/**
 * Tabbed Navigation
 */
const TOP_BAR_OPTIONS = {
  animate: true,
  visible: false,
  drawBehind: true,
};

const BOTTOM_TAB_OPTIONS = {
  text: '',
  fontSize: 14,
  textColor: TYPOGRAPHY.COLOR.Title,
  badgeColor: TYPOGRAPHY.COLOR.Warning,
  selectedTextColor: TYPOGRAPHY.COLOR.Warning,
};

export const tabbedNavigation = () =>
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: SCREENS.Drawer,
            id: 'drawerComponentId',
          },
        },
        center: {
          bottomTabs: {
            id: 'BottomTabsId',
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        id: SCREENS.Home,
                        name: SCREENS.Home,
                        passProps: {
                          text: 'This is Home',
                        },
                        options: {
                          statusBar: STATUS_BAR_OPTIONS,
                        },
                      },
                    },
                  ],
                  options: {
                    topBar: TOP_BAR_OPTIONS,
                    bottomTab: {
                      ...BOTTOM_TAB_OPTIONS,
                      icon: require('../view/assets/images/tabbar/home_new.png'),
                      selectedIcon: require('../view/assets/images/tabbar/home_active.png'),
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        id: SCREENS.Search,
                        name: SCREENS.Search,
                        options: {
                          statusBar: STATUS_BAR_OPTIONS,
                        },
                      },
                    },
                  ],
                  options: {
                    topBar: TOP_BAR_OPTIONS,
                    bottomTab: {
                      ...BOTTOM_TAB_OPTIONS,
                      text: '',
                      icon: require('../view/assets/images/tabbar/search.png'),
                      iconColor: TYPOGRAPHY.COLOR.Title,
                      selectedIconColor: TYPOGRAPHY.COLOR.DefaultSelected,
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        id: SCREENS.Cart,
                        name: SCREENS.Cart,
                        options: {
                          statusBar: STATUS_BAR_OPTIONS,
                        },
                      },
                    },
                  ],
                  options: {
                    topBar: TOP_BAR_OPTIONS,
                    bottomTab: {
                      ...BOTTOM_TAB_OPTIONS,
                      text: '',
                      icon: require('../view/assets/images/tabbar/cart.png'),
                      selectedIcon: require('../view/assets/images/tabbar/cart_active.png'),
                      badge: `${Store.getState().cart.items.length}`,
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        id: SCREENS.Settings,
                        name: SCREENS.Settings,
                        options: {
                          statusBar: STATUS_BAR_OPTIONS,
                        },
                      },
                    },
                  ],
                  options: {
                    topBar: TOP_BAR_OPTIONS,
                    bottomTab: {
                      ...BOTTOM_TAB_OPTIONS,
                      text: '',
                      icon: require('../view/assets/images/tabbar/profile.png'),
                      iconColor: TYPOGRAPHY.COLOR.Title,
                      selectedIcon: require('../view/assets/images/tabbar/profile_active.png'),
                      selectedIconColor: TYPOGRAPHY.COLOR.DefaultSelected,
                      badge: '1',
                    },
                  },
                },
              },
            ],
          },
        },
      },
    },
  });

export default tabbedNavigation;
