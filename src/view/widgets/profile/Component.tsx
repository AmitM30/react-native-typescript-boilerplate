import * as React from 'react';
import { View } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { Card } from '../../elements/layout';
import { CImage } from '../../elements/atoms';
import { CText } from '../../elements/inputs';

interface Props {
  componentId: string;
}

const UserProfile: React.FC<Props> = (props: Props) => {

  return (
    <Card style={[GLOBAL.LAYOUT.adjascent, { alignItems: 'center' }]}>
      <CImage path={require('../../assets/images/profile.jpeg')} style={{
        width: 120,
        height: 120,
        marginRight: 30,
        borderRadius: 60,
      }} />
      <View>
        <CText style={GLOBAL.FONTS.title}>{'Michael Scott'}</CText>
        <CText style={GLOBAL.FONTS.body}>{'mangalamitash@gmail.com'}</CText>
      </View>
    </Card>
  );
};

export default UserProfile;
