import * as React from 'react';
import { SafeAreaView, View } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { CText } from '../../elements/inputs';
import { BUTTON_PRIMARY } from '../../elements/buttons';

export interface Props {
  componentId: string;
}

const Search: React.FC<Props> = (props: Props) => (
  <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
    <View style={GLOBAL.LAYOUT.pageContainer}>
      <CText>{'Search'}</CText>
      <BUTTON_PRIMARY title={'Search'} onClick={() => {}} />
    </View>
  </SafeAreaView>
);

export default Search;
