import * as React from 'react';
import { SafeAreaView, View } from 'react-native';

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

class Dummy extends React.PureComponent<Props, State> {
  static options(props: Props) {
    return {
      topBar: {
        title: {
          text: props.dummyText,
        },
      },
    };
  }

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {}

  backNavigation = () => {
    const { componentId } = this.props;
    Navigation.pop(componentId);
  }

  render() {
    const { dummyText, componentId } = this.props;

    return (
      <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
        <View style={GLOBAL.LAYOUT.pageContainer}>
          <CText>Dummy Screen 1</CText>
          <CText>{`Prop passed: ${dummyText}`}</CText>
          <BUTTON_PRIMARY title={'Push 2'} onClick={() => { Navigation.push(componentId, { component: { id: SCREENS.Dummy2, name: SCREENS.Dummy2 } }); }} />
          <BUTTON_PRIMARY title={'Go Back'} onClick={this.backNavigation} />
        </View>
      </SafeAreaView>
    );
  }
}

export default Dummy;
