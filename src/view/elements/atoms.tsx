import * as React from 'react';
import { Image, StyleProp, ImageStyle, ImageSourcePropType } from 'react-native';

export interface ImageProps {
  path?: ImageSourcePropType;
  uri?: string;
  style?: StyleProp<ImageStyle>;
}

const CImage: React.FC<ImageProps> = ({ style, path, uri }: ImageProps) => (
  <Image
    style={style}
    resizeMode={'cover'}
    source={path ? path : { uri }}
  />
);

export { CImage };
