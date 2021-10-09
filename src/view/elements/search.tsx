import * as React from 'react';
import { Pressable, StyleProp, TextStyle } from 'react-native';

import SVGIcons from '../assets/svgs';
import { CTextInput } from './inputs';
import { GLOBAL } from '../styles/global';
import { TYPOGRAPHY } from '../styles/typography';

type Callback = () => any;
export interface Props {
  style?: StyleProp<TextStyle>;
  onClick?: Callback;
  disabled?: boolean;
}

const SearchInput: React.FC<Props> = ({ disabled, style, onClick }: Props) => (
  <Pressable
    onPress={onClick}
    style={[GLOBAL.ELEMENTS.SearchInput, style]}
  >
    <CTextInput disabled={disabled} style={GLOBAL.TEXT_INPUT.Style.Search} />
    <SVGIcons.Search style={TYPOGRAPHY.ELEMENTS.SearchInput} />
  </Pressable>
);

export { SearchInput };
