import * as React from 'react';
import { SafeAreaView, View } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { CTEXT } from '../../elements/custom';

interface Props {}

const DRAWER: React.FC<Props> = () => (
  <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
    <View style={GLOBAL.LAYOUT.pageContainer}>
      <CTEXT>{'Drawer Menu'}</CTEXT>
    </View>
  </SafeAreaView>
);

export default DRAWER;
