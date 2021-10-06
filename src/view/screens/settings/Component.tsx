import * as React from 'react';
import { SafeAreaView, View } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { CText } from '../../elements/inputs';

export interface Props {
  componentId: string;
}

const Settings: React.FC<Props> = (props: Props) => (
  <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
    <View style={GLOBAL.LAYOUT.pageContainer}>
      <CText>{'Settings'}</CText>
    </View>
  </SafeAreaView>
);

export default Settings;
