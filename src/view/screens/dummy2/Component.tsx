import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { GLOBAL } from '../../styles/global';
import { CText } from '../../elements/inputs';
import router from '../../../navigators/router';
import { SCREENS } from '../../../constants/screen';
import { BUTTON_PRIMARY } from '../../elements/buttons';

export interface Props {
  componentId: string;
}

const DummyScreen2: React.FC<Props> = ({ componentId }: Props) => {
  const backNavigation = () => {
    Navigation.pop(componentId);
  };

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <View style={GLOBAL.LAYOUT.pageContainer}>
        <CText>{'Dummy 2'}</CText>
        <BUTTON_PRIMARY title={'Push 3'} onClick={
          () => router.push({ componentId }, SCREENS.Listings)
        } />
        <BUTTON_PRIMARY title={'Go Back'} onClick={backNavigation} />
        <BUTTON_PRIMARY title={'Dismiss Modal'} onClick={backNavigation} />
      </View>
    </SafeAreaView>
  );
};

export default DummyScreen2;
