import * as React from 'react';
import { Pressable, StyleProp, TextStyle } from 'react-native';

import { CText } from '../inputs';
import { GLOBAL } from '../../styles/global';

type Callback = () => any;
export interface Props {
  title: string;
  subTitle?: string;
  style?: StyleProp<TextStyle>;
  onClick?: Callback;
}

const SectionTitle: React.FC<Props> = ({ title, subTitle, style, onClick }: Props) => (
  <Pressable
    onPress={onClick}
    style={[GLOBAL.LAYOUT.sectionTitle, style]}
  >
    <CText style={GLOBAL.FONTS.title}>{title}</CText>
    {subTitle && <CText style={GLOBAL.FONTS.subTitle}>{subTitle}</CText>}
  </Pressable>
);

export { SectionTitle };
