/**
 * Defined application routes over here
 * Good place to define some commonly used methods like
 *          `popToScreen`, `dismissModal`...
 */
import { Navigation } from 'react-native-navigation';

import { STATUS_BAR_OPTIONS } from './navigation';
import { TYPOGRAPHY } from '../view/styles/typography';
import { ACTION_BUTTONS, SCREENS } from '../constants/screen';
import { INavigation } from '../../shared/redux/types/INavigation';

/**
 * Router method to show a screen by pushing on top of current stack
 * @param {object} params i.e {componentId is compulsory, passProps is optional},
 */
const showPushScreen = ({ componentId, passProps = {} }: INavigation) => {
  Navigation.push(componentId, {
    component: {
      name: SCREENS.Dummy,
      id: SCREENS.Dummy,
      passProps: {
        ...passProps,
      },
      options: {
        statusBar: STATUS_BAR_OPTIONS,
        topBar: {
          visible: true,
          drawBehind: false,
          rightButtons: [
            {
              id: 'actionSheetRB',
              icon: require('../view/assets/images/share.png'),
              color: TYPOGRAPHY.COLOR.DefaultSelected,
            },
            {
              id: ACTION_BUTTONS.CartAB,
              component: {
                name: ACTION_BUTTONS.CartAB, id: ACTION_BUTTONS.CartAB,
                passProps: {
                  onClick: () => showCartScreen({ componentId }),
                },
              },
            },
          ],
        },
      },
    },
  });
};

/**
 * Router method to show a screen by pushing on top of current stack
 * @param {object} params i.e {componentId is compulsory, passProps is optional},
 */
const push = ({ componentId, passProps = {} }: INavigation, id: string, title?: string) => {
  Navigation.push(componentId, {
    component: {
      name: id,
      passProps: {
        ...passProps,
      },
      options: {
        statusBar: STATUS_BAR_OPTIONS,
        topBar: {
          visible: true,
          drawBehind: false,
          title: {
            text: title || id.toString()
          },
        },
      },
    },
  });
};

const showListingsScreen = ({ componentId, passProps = {} }: INavigation, title?: string) => {
  push({ componentId, passProps }, SCREENS.Listings, title);
};

const showDetailsScreen = ({ componentId, passProps = {} }: INavigation, title?: string) =>
  Navigation.push(componentId, {
    component: {
      name: SCREENS.Details,
      passProps: {
        ...passProps,
      },
    },
  });

const showCartScreen = ({ componentId, passProps = {} }: INavigation) => {
  Navigation.mergeOptions(componentId, {
    bottomTabs: {
      currentTabIndex: 2,
    },
  });
};

const showSearchScreen = ({ componentId, passProps = {} }: INavigation) => {
  Navigation.mergeOptions(componentId, {
    bottomTabs: {
      currentTabIndex: 1,
    },
  });
};

const showDrawer = () => {
  Navigation.mergeOptions('drawerComponentId', {
    sideMenu: {
      left: {
        visible: true,
      },
    },
  });
};

const popToScreen = ({ componentId }: INavigation) => {
  Navigation.popTo(componentId);
};

const showModal = (name: string, id?: string) => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name,
            id,
            options: {
              statusBar: STATUS_BAR_OPTIONS,
              topBar: {
                visible: false,
              }
            }
          },
        },
      ],
    },
  });
};

const dismissModal = ({ componentId }: INavigation) => {
  Navigation.dismissModal(componentId);
};

const pop = ({ componentId }: INavigation) => Navigation.pop(componentId);

const popToRoot = ({ componentId }: INavigation) => Navigation.popToRoot(componentId);

const ROUTER = {
  showPushScreen,
  popToScreen,
  showModal,
  dismissModal,
  pop,
  popToRoot,
  showCartScreen,
  showSearchScreen,
  showDrawer,
  push,
  showListingsScreen,
  showDetailsScreen,
};

export default ROUTER;
