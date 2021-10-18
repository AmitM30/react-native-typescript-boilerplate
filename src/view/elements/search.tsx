import * as React from 'react';
import { NativeSyntheticEvent, Pressable, StyleProp, TextInputSubmitEditingEventData, TextStyle } from 'react-native';

import SVGIcons from '../assets/svgs';
import { CTextInput } from './inputs';
import { GLOBAL } from '../styles/global';
import { TYPOGRAPHY } from '../styles/typography';
import { SearchContext } from '../screens/search/Component';

type Callback = () => any;
type onSubmitEvent = ({ nativeEvent }: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
export interface Props {
  style?: StyleProp<TextStyle>;
  onClick?: Callback;
  disabled?: boolean;
  onSubmit?: onSubmitEvent;
}

const SearchInput: React.FC<Props> = ({ disabled, style, onClick, onSubmit }: Props) => {
  const search = React.useContext(SearchContext);

  return (
    <Pressable
      onPress={onClick}
      style={[GLOBAL.ELEMENTS.SearchInput, style]}
    >
      <CTextInput value={search.searchTerm} onSubmit={onSubmit} disabled={disabled} style={GLOBAL.TEXT_INPUT.Style.Search} />
      <SVGIcons.Search style={TYPOGRAPHY.ELEMENTS.SearchInput} />
    </Pressable>
  )
};

export { SearchInput };
