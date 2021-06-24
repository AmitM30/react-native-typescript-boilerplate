import * as React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';
import { CText } from '../../elements/custom';
import { BUTTON_DEFAULT } from '../../elements/buttons';
import { Navigation } from 'react-native-navigation';
import { SCREENS } from '../../../constants/screen';

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
    const { dummyText, componentId } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <CText>Dummy 2</CText>
        <BUTTON_DEFAULT title={'Push 3'} onClick={() => { Navigation.push(componentId, { component: { id: SCREENS.Dummy3, name: SCREENS.Dummy3 } }) }} />
        <BUTTON_DEFAULT title={'Go Back'} onClick={this.backNavigation} />
        <BUTTON_DEFAULT title={'Dismiss Modal'} onClick={() => { Navigation.dismissModal(componentId); }} />
      </SafeAreaView>
    );
  }
}

export default Dummy2;
