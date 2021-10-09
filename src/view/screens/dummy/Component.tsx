import * as React from 'react';
import { SafeAreaView, View } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { CText } from '../../elements/inputs';
import router from '../../../navigators/router';
import { SCREENS } from '../../../constants/screen';
import { Navigation } from 'react-native-navigation';
import { BUTTON_PRIMARY } from '../../elements/buttons';

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
          <CText>{'Dummy Screen 1'}</CText>
          <CText>{`Prop passed: ${dummyText}`}</CText>
          <BUTTON_PRIMARY title={'Push 2'} onClick={
            () => router.push({ componentId }, SCREENS.Dummy2)
          } />
          <BUTTON_PRIMARY title={'Go Back'} onClick={this.backNavigation} />
        </View>
      </SafeAreaView>
    );
  }
}

export default Dummy;
