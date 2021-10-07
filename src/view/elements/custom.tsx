import * as React from 'react';
import { StyleProp, Text, TextInput, TextStyle } from 'react-native';

import { GLOBAL } from '../styles/global';
import { TYPOGRAPHY } from '../styles/typography';

export interface TextProps {
  children: React.ReactElement | string;
  style?: StyleProp<TextStyle>;
}

export interface TextInputProps {
  style?: Object;
  disabled?: boolean;
  textInputRef?: any;
  placeholderTextColor?: string;
}

const CTEXT: React.FC<TextProps> = (props: TextProps) => (
  <Text style={[GLOBAL.TEXT.Default, props.style]}>
    {props.children}
  </Text>
);

const CTEXTINPUT: React.FC<TextInputProps> = (props: TextInputProps) => {
  const {
    style,
    placeholderTextColor = TYPOGRAPHY.COLOR.Secondary,
    textInputRef,
    disabled = false,
  } = props;
  const [data, setData] = React.useState('');

  return (
    <TextInput
      ref={textInputRef}
      value={data}
      editable={!disabled}
      onChange={e => setData(e.nativeEvent.text)}
      placeholderTextColor={placeholderTextColor}
      underlineColorAndroid={'transparent'}
      {...props}
      style={[GLOBAL.TEXT_INPUT.Style.Default, style]}
      autoCorrect={false}
    />
  );
};

export { CTEXT, CTEXTINPUT };
