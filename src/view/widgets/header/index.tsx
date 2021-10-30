import * as React from 'react';
import { NativeSyntheticEvent, TextInputSubmitEditingEventData, View } from 'react-native';

import SVGIcons from '../../assets/svgs';
import { GLOBAL } from '../../styles/global';
import { Card } from '../../elements/layout';
import router from '../../../navigators/router';
import { SearchInput } from '../../elements/search';
import { SCREENS } from '../../../constants/screen';
import { TYPOGRAPHY } from '../../styles/typography';
import { BUTTON_CATEGORY } from '../../elements/buttons';

type Callback = () => any;
type onSubmitEvent = ({ nativeEvent }: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
interface Props {
  inputDisabled?: boolean;
  onClick?: Callback;
  onSubmit?: onSubmitEvent;
}

// const onSubmit = ({ nativeEvent }: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
//   console.log('>>> nativeEvent.text', nativeEvent.text);
// }

const Header: React.FC<Props> = ({ inputDisabled = false, onClick, onSubmit }: Props) => (
  <Card onClick={onClick}>
    <View style={[GLOBAL.LAYOUT.row, GLOBAL.ELEMENTS.Header]}>
      <SearchInput onSubmit={onSubmit} disabled={inputDisabled} />
      <BUTTON_CATEGORY
        onClick={onClick || (() => { })}
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
