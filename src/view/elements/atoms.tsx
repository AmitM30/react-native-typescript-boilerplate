import * as React from 'react';
import {
  Image, StyleProp, ImageStyle, ImageSourcePropType, ImageResizeMode, Pressable
} from 'react-native';

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

interface PillLightProps {
  left: string;
  right: React.ReactElement;
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

const PillLight: React.FC<PillLightProps> = ({ left, right }: PillLightProps) => (
  <Pressable style={[GLOBAL.LAYOUT.row, GLOBAL.ELEMENTS.PillLight]}>
    <CText style={{ color: TYPOGRAPHY.COLOR.Secondary }}>{left}</CText>
    {right}
  </Pressable>
);

export { CImage, Pill, PillLight };
