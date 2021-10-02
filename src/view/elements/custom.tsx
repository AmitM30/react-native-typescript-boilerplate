import * as React from 'react';
import { Text, TextInput, TextStyle } from 'react-native';

import { GLOBAL } from '../styles/global';
import { TYPOGRAPHY } from '../styles/typography';

export interface TextProps {
  children: React.ReactElement | string;
  style?: TextStyle;
}

export interface TextInputProps {
  style?: Object,
  textInputRef?: any,
  placeholderTextColor?: string
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
    textInputRef
  } = props;
  const [data, setData] = React.useState('')
  
  return (
    <TextInput
      ref={textInputRef}
      value={data}
      onChange={(e) => { console.log('>>> e:', e, e.nativeEvent.text); setData(e.nativeEvent.text)}}
      placeholderTextColor={placeholderTextColor}
      underlineColorAndroid={'transparent'}
      {...props}
      style={[GLOBAL.TEXT_INPUT.Style.Default, style]}
      autoCorrect={false}
    />
  )
};

export { CText, CTextInput };
