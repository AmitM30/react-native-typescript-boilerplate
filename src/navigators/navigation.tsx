/**
 * Application navigation stacks to be defined here.
 */
import { Navigation } from 'react-native-navigation';

import { SCREENS } from '../constants/screen';
import { TYPOGRAPHY } from '../view/styles/typography';

export const showSplash = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: SCREENS.Drawer,
            id: 'drawerComponentId'
          }
        },
        center: {
          component:  { name: SCREENS.Splash },
        }
      }
      // component: { name: SCREENS.Splash },
    },
  });
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
                        name: SCREENS.Home,
                        passProps: {
                          text: 'This is Home',
                        },
                      },
                    },
                  ],
                  options: {
                    topBar: {
                      visible: false,
                      drawBehind: true,
                      animate: true,
                    },
                    bottomTab: {
                      fontSize: 14,
                      text: 'Home',
                      textColor: TYPOGRAPHY.COLOR.Primary,
                      selectedTextColor: TYPOGRAPHY.COLOR.Warning,
                      selectedIconColor: TYPOGRAPHY.COLOR.Warning,
                      icon: require('../view/assets/images/tabbar/home.png'),
                      selectedIcon: require('../view/assets/images/tabbar/home.png'),
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: SCREENS.Settings,
                      },
                    },
                  ],
                  options: {
                    topBar: {
                      visible: false,
                      drawBehind: true,
                      animate: true,
                    },
                    bottomTab: {
                      text: 'Settings',
                      fontSize: 14,
                      textColor: TYPOGRAPHY.COLOR.Primary,
                      selectedTextColor: TYPOGRAPHY.COLOR.Warning,
                      selectedIconColor: TYPOGRAPHY.COLOR.Warning,
                      icon: require('../view/assets/images/tabbar/settings.png'),
                      selectedIcon: require('../view/assets/images/tabbar/settings.png'),
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
