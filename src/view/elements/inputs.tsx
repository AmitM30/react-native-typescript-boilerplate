import * as React from 'react';
import { NativeSyntheticEvent, StyleProp, Text, TextInput, TextInputSubmitEditingEventData, TextStyle } from 'react-native';

import { GLOBAL } from '../styles/global';
import { TYPOGRAPHY } from '../styles/typography';

export interface TextProps {
  children: React.ReactElement | string;
  style?: StyleProp<TextStyle>;
}

type onSubmitEvent = ({ nativeEvent }: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void
export interface TextInputProps {
  style?: Object;
  value?: string;
  disabled?: boolean;
  textInputRef?: any;
  placeholderTextColor?: string;
  onSubmit?: onSubmitEvent;
}

const CText: React.FC<TextProps> = (props: TextProps) => (
  <Text style={[GLOBAL.TEXT.Default, props.style]}>
    {props.children}
  </Text>
);

const CTextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
  const {
    style,
    placeholderTextColor = TYPOGRAPHY.COLOR.Secondary,
    textInputRef,
    disabled = false,
    onSubmit,
    value
  } = props;
  const [data, setData]: [string | undefined, React.Dispatch<any>] = React.useState(value);

  return (
    <TextInput
      ref={textInputRef}
      value={data}
      editable={!disabled}
      onChange={e => setData(e.nativeEvent.text)}
      placeholderTextColor={placeholderTextColor}
      underlineColorAndroid={'transparent'}
      onSubmitEditing={onSubmit}
      style={[GLOBAL.TEXT_INPUT.Style.Default, style]}
      autoCorrect={false}
    />
  );
};

export { CText, CTextInput };
