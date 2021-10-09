import * as React from 'react';
import { SafeAreaView, View } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { CText } from '../../elements/inputs';
import { Navigation } from 'react-native-navigation';
import { BUTTON_PRIMARY } from '../../elements/buttons';

export interface Props {
  componentId: string;
}

const Listings: React.FC<Props> = ({ componentId }: Props) => {
  const backNavigation = () => {
    Navigation.popToRoot(componentId);
  };

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <View style={GLOBAL.LAYOUT.pageContainer}>
        <CText>{'Listings'}</CText>
        <BUTTON_PRIMARY title={'Go Back to Dummy 1'} onClick={backNavigation} />
      </View>
    </SafeAreaView>
  );
};

export default Listings;
