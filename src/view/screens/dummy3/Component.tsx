import * as React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';
import { CText } from '../../elements/custom';
import { BUTTON_PRIMARY } from '../../elements/buttons';
import { Navigation } from 'react-native-navigation';

export interface Props {
  dummyText: string;
  componentId: string;
}

interface State {
  name: string;
}

class Dummy3 extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {}

  backNavigation = () => {
    Navigation.popToRoot(this.props.componentId);
  }

  render() {
    const { dummyText } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <CText>Dummy 3</CText>
        <BUTTON_PRIMARY title={'Go Back to Dummy 1'} onClick={this.backNavigation} />
      </SafeAreaView>
    );
  }
}

export default Dummy3;
