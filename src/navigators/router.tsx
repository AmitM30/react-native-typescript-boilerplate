/**
 * Defined application routes over here
 * Good place to define some commonly used methods like
 *          `popToScreen`, `dismissModal`...
 */
import { Navigation } from 'react-native-navigation';

import { ACTION_BUTTONS, SCREENS } from '../constants/screen';
import { TYPOGRAPHY } from '../view/styles/typography';
import { STATUS_BAR_OPTIONS } from './navigation';

interface Screen {
  componentId: string;
  passProps?: object;
}

/**
 * Router method to show a screen by pushing on top of current stack
 * @param {object} params i.e {componentId is compulsory, passProps is optional},
 */
const showPushScreen = ({ componentId, passProps = {} }: Screen) => {
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
const push = ({ componentId, passProps = {} }: Screen, id: string, name?: string ) => {
  Navigation.push(componentId, {
    component: {
      id: id,
      name: name || id.toString(),
      passProps: {
        ...passProps,
      },
      options: {
        statusBar: STATUS_BAR_OPTIONS,
        topBar: {
          visible: true,
          drawBehind: false,
          title: {
            text: name || id.toString()
          }
        },
      },
    },
  });
};

const showCartScreen = ({ componentId, passProps = {} }: Screen) => {
  Navigation.mergeOptions(componentId, {
    bottomTabs: {
      currentTabIndex: 2,
    },
  });
};

const showSearchScreen = ({ componentId, passProps = {} }: Screen) => {
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

const popToScreen = (componentId: string) => {
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

const dismissModal = (componentId: string) => {
  Navigation.dismissModal(componentId);
};

const pop = ({ componentId }: Screen) => Navigation.pop(componentId);

const popToRoot = ({ componentId }: Screen) => Navigation.popToRoot(componentId);

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
};

export default ROUTER;
