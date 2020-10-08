/**
 * Defined application routes over here
 * Good place to define some commonly used methods like
 *          `popToScreen`, `dismissModal`...
 */
import { Navigation } from 'react-native-navigation';

import { SCREENS } from '../constants/screen';

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
        topBar: {
          visible: true,
        },
      },
    },
  });
};

const popToScreen = (componentId: string) => {
  Navigation.popTo(componentId);
};

const dismissModal = (componentId: string) => {
  Navigation.dismissModal(componentId);
};

const pop = ({ componentId }: Screen) => Navigation.pop(componentId);

const popToRoot = ({ componentId }: Screen) => Navigation.popToRoot(componentId);

const ROUTER = {
  showPushScreen,
  popToScreen,
  dismissModal,
  pop,
  popToRoot,
};

export default ROUTER;
