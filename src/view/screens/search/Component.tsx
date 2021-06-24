import * as React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';
import { CText } from '../../elements/custom';
import { BUTTON_DEFAULT } from '../../elements/buttons';

export interface Props {
  componentId: string;
}

const Search = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <CText>Search</CText>
      <BUTTON_DEFAULT title={'Search'} onClick={() => {}} />
    </SafeAreaView>
  );
}

export default Search;
