/**
 * Application navigation stacks to be defined here.
 */
import { Navigation } from 'react-native-navigation';

import { SCREENS } from '../constants/screen';
import { TYPOGRAPHY } from '../view/styles/typography';

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
                }
              }
            ]
          }
        }
      }
    },
  });
};

/**
 * Tabbed Navigation
 */
const TOP_BAR_OPTIONS = {
  visible: false,
  drawBehind: true,
  animate: true,
};

const BOTTOM_TAB_OPTIONS = {
  fontSize: 14,
  text: '',
  textColor: TYPOGRAPHY.COLOR.Primary,
  selectedTextColor: TYPOGRAPHY.COLOR.Warning,
  // selectedIconColor: TYPOGRAPHY.COLOR.Warning,
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
                      },
                    },
                  ],
                  options: {
                    topBar: TOP_BAR_OPTIONS,
                    bottomTab: {
                      ...BOTTOM_TAB_OPTIONS,
                      text: '',
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
                      },
                    },
                  ],
                  options: {
                    topBar: TOP_BAR_OPTIONS,
                    bottomTab: {
                      ...BOTTOM_TAB_OPTIONS,
                      text: '',
                      icon: require('../view/assets/images/tabbar/search.png'),
                      iconColor: TYPOGRAPHY.COLOR.Primary,
                      selectedIconColor: TYPOGRAPHY.COLOR.DefaultSelected
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
                      },
                    },
                  ],
                  options: {
                    topBar: TOP_BAR_OPTIONS,
                    bottomTab: {
                      ...BOTTOM_TAB_OPTIONS,
                      text: '',
                      icon: require('../view/assets/images/tabbar/cart.png'),
                      iconColor: TYPOGRAPHY.COLOR.Primary,
                      selectedIcon: require('../view/assets/images/tabbar/cart_active.png'),
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
                        id: SCREENS.Settings,
                        name: SCREENS.Settings,
                      },
                    },
                  ],
                  options: {
                    topBar: TOP_BAR_OPTIONS,
                    bottomTab: {
                      ...BOTTOM_TAB_OPTIONS,
                      text: '',
                      icon: require('../view/assets/images/tabbar/profile.png'),
                      iconColor: TYPOGRAPHY.COLOR.Primary,
                      selectedIcon: require('../view/assets/images/tabbar/profile_active.png'),
                      selectedIconColor: TYPOGRAPHY.COLOR.DefaultSelected,
                      badge: '1',
                      badgeColor: TYPOGRAPHY.COLOR.Warning
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
