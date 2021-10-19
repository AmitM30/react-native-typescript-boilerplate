import * as React from 'react';
import { Image, StyleProp, ImageStyle, ImageSourcePropType, ImageResizeMode } from 'react-native';
import { GLOBAL } from '../styles/global';

export interface ImageProps {
  path?: ImageSourcePropType;
  uri?: string;
  style?: StyleProp<ImageStyle>;
  resizeMode?: ImageResizeMode;
}

const CImage: React.FC<ImageProps> = ({ style, path, uri, resizeMode }: ImageProps) => (
  <Image
    style={[GLOBAL.FONTS.image, style]}
    resizeMode={resizeMode || 'cover'}
    source={path ? path : { uri }}
  />
);

export { CImage };
