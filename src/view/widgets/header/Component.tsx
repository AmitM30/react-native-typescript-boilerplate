import * as React from 'react';
import { View } from 'react-native';

import SVGIcons from '../../assets/svgs';
import { GLOBAL } from '../../styles/global';
import { Card } from '../../elements/layout';
import router from '../../../navigators/router';
import { SearchInput } from '../../elements/search';
import { SCREENS } from '../../../constants/screen';
import { TYPOGRAPHY } from '../../styles/typography';
import { BUTTON_CATEGORY } from '../../elements/buttons';

interface Props {}

const showModal = () => {
  router.showModal(SCREENS.Dummy2, SCREENS.Dummy2);
}

const Header: React.FC<Props> = (props: Props) => (
  <Card>
    <View style={[GLOBAL.LAYOUT.row, GLOBAL.ELEMENTS.Header]}>
      <SearchInput />
      <BUTTON_CATEGORY
        onClick={showModal}
        style={GLOBAL.CTA.Style.cameraIcon}
        hideShadow={true}
        icon={<SVGIcons.Camera
          color={GLOBAL.CTA.Style.cameraIcon.color}
          style={TYPOGRAPHY.BUTTON.cameraIcon.icon}
        />}
      />
    </View>
  </Card>
);

export default Header;
