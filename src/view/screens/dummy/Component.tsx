import * as React from 'react';
import { SafeAreaView } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { CTEXT } from '../../elements/custom';

import { Props } from './index';

const DUMMY: React.FC<Props> = (props: Props) => (
  <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
    <CTEXT>{'This Screen has been pushed over Home screen'}</CTEXT>
    <CTEXT>{`Prop passed: ${props.dummyText}`}</CTEXT>
  </SafeAreaView>
);

export default DUMMY;
