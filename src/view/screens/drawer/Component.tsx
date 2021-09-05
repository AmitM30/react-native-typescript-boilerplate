import * as React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';
import { CTEXT } from '../../elements/custom';

interface Props {}

const Drawer: React.FC<Props> = () => (
  <SafeAreaView style={styles.container}>
    <CTEXT>{'Drawer Menu'}</CTEXT>
  </SafeAreaView>
);

export default Drawer;
