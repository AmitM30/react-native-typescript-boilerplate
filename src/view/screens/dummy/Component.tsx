import * as React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';
import { CTEXT } from '../../elements/custom';

export interface Props {
  dummyText: string;
  componentId?: string;
}

const Dummy: React.FC<Props> = (props: Props) => (
  <SafeAreaView style={styles.container}>
    <CTEXT>{'This Screen has been pushed over Home screen'}</CTEXT>
    <CTEXT>{`Prop passed: ${props.dummyText}`}</CTEXT>
  </SafeAreaView>
);

export default Dummy;
