import * as React from 'react';
import { SafeAreaView } from 'react-native';

import { CText } from '../../elements/custom';
import { BUTTON_PRIMARY } from '../../elements/buttons';
import { Navigation } from 'react-native-navigation';
import { SCREENS } from '../../../constants/screen';
import { GLOBAL } from '../../styles/global';

export interface Props {
  dummyText: string;
  componentId: string;
}

interface State {
  name: string;
}

class Dummy2 extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {}

  backNavigation = () => {
    Navigation.pop(this.props.componentId);
  }

  render() {
    const { componentId } = this.props;

    return (
      <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
        <CText>Dummy 2</CText>
        <BUTTON_PRIMARY title={'Push 3'} onClick={() => { Navigation.push(componentId, { component: { id: SCREENS.Dummy3, name: SCREENS.Dummy3 } }); }} />
        <BUTTON_PRIMARY title={'Go Back'} onClick={this.backNavigation} />
        <BUTTON_PRIMARY title={'Dismiss Modal'} onClick={() => { Navigation.dismissModal(componentId); }} />
      </SafeAreaView>
    );
  }
}

export default Dummy2;
