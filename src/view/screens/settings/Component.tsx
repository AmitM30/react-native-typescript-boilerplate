import * as React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';
import { CTEXT } from '../../elements/custom';

export interface Props {}

const Settings: React.FC<Props> = (props: Props) => (
  <SafeAreaView style={styles.container}>
    <CTEXT>{'Settings'}</CTEXT>
  </SafeAreaView>
);

export default Settings;
