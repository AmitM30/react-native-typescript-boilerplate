import * as React from 'react';
import { Image, StyleProp, ImageStyle, ImageSourcePropType, ImageResizeMode, View, Pressable } from 'react-native';

import { CText } from './inputs';
import { GLOBAL } from '../styles/global';
import { TYPOGRAPHY } from '../styles/typography';

interface ImageProps {
  path?: ImageSourcePropType;
  uri?: string;
  style?: StyleProp<ImageStyle>;
  resizeMode?: ImageResizeMode;
}

interface PillProps {
  text: string;
  onClick: (text: string) => void;
}

const CImage: React.FC<ImageProps> = ({ style, path, uri, resizeMode }: ImageProps) => (
  <Image
    style={[GLOBAL.FONTS.image, style]}
    resizeMode={resizeMode || 'cover'}
    source={path ? path : { uri }}
  />
);

const Pill: React.FC<PillProps> = ({ text, onClick }: PillProps) => (
  <Pressable style={GLOBAL.ELEMENTS.Pill} onPress={() => onClick(text)}>
    <CText style={{ color: TYPOGRAPHY.COLOR.Secondary }}>{text}</CText>
  </Pressable>
);

export { CImage, Pill };
