import * as React from 'react';
import { SafeAreaView, View } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { CText } from '../../elements/inputs';

export interface Props {
  name: string;
}

interface State {
  name: string;
}

class Drawer extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
        <View style={GLOBAL.LAYOUT.pageContainer}>
          <CText>Drawer Menu</CText>
          <CText>Add items here</CText>
        </View>
      </SafeAreaView>
    );
  }
}

export default Drawer;
