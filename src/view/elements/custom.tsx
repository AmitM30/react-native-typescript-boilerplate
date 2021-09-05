import * as React from 'react';
import { Text, TextStyle } from 'react-native';

import { GLOBAL } from '../styles/global';

export interface Props {
  children: JSX.Element | string;
  style?: TextStyle;
}

/**
 * Native Text element with default styles
 * @param props style, children
 * @returns JSX.Element
 */
const CTEXT: React.FC<Props> = (props: Props) => (
  <Text {...props} style={[GLOBAL.TEXT.Default, props.style]}>
    {props.children}
  </Text>
);

export { CTEXT };
