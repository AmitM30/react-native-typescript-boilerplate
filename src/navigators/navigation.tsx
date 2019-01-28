import { Navigation } from 'react-native-navigation';

import Screens from '../constants/screen';
import TYPOGRAPHY from '../view/styles/typography';

export const showSplash = () => {
  Navigation.setRoot({
    root: {
      component: {
        name: Screens.Splash
      }
    }
  });
};

export const tabbedNavigation = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: Screens.Home,
                  passProps: {
                    text: 'This is Home'
                  },
                  options: {
                    topBar: {
                      visible: false,
                      drawBehind: true,
                      animate: true
                    },
                    bottomTab: {
                      fontSize: 12,
                      text: 'Home',
                      textColor: TYPOGRAPHY.Color.Primary,
                      selectedTextColor: TYPOGRAPHY.Color.Primary,
                      icon: require('../view/assets/images/tabbar/home.png'),
                      selectedIcon: require('../view/assets/images/tabbar/home.png')
                    }
                  }
                }
              }
            ]
          }
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: Screens.Settings,
                  options: {
                    topBar: {
                      visible: false,
                      drawBehind: true,
                      animate: true
                    },
                    bottomTab: {
                      text: 'Settings',
                      fontSize: 12,
                      textColor: TYPOGRAPHY.Color.Primary,
                      selectedTextColor: TYPOGRAPHY.Color.Primary,
                      icon: require('../view/assets/images/tabbar/settings.png'),
                      selectedIcon: require('../view/assets/images/tabbar/settings.png')
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      options: {
        bottomTabs: {
          visible: true,
          titleDisplayMode: 'alwaysShow',
          backgroundColor: TYPOGRAPHY.Color.Default,
          drawBehind: true
        }
      }
    }
  }
});

export default tabbedNavigation;
