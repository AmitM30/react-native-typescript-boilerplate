import * as React from 'react';
import {
  Image, StyleProp, ImageStyle, ImageSourcePropType, ImageResizeMode, Pressable, View, Touchable, TouchableOpacity
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


interface StepperProps {
  count?: number;
}

interface BadgeProps {
  text: string;
}

const CImage: React.FC<ImageProps> = ({ style, path, uri, resizeMode }: ImageProps) => (
  <Image
    style={[GLOBAL.FONTS.image, style]}
    resizeMode={resizeMode || 'cover'}
    source={path ? path : { uri }}
  />
);

const Pill: React.FC<PillProps> = ({ text, onClick }: PillProps) => (
  <Pressable style={GLOBAL.ATOMS.Pill} onPress={() => onClick(text)}>
    <CText style={{ color: TYPOGRAPHY.COLOR.Secondary }}>{text}</CText>
  </Pressable>
);

const PillLight: React.FC<PillLightProps> = ({ left, right }: PillLightProps) => (
  <Pressable style={[GLOBAL.LAYOUT.row, GLOBAL.ELEMENTS.PillLight]}>
    <CText style={{ color: TYPOGRAPHY.COLOR.Secondary }}>{left}</CText>
    {right}
  </Pressable>
);

const Stepper: React.FC<StepperProps> = ({ count = 0 }: StepperProps) => {
  const [counter, setCounter] = React.useState(count)
  const displayText = (text: string) => (<CText style={{...TYPOGRAPHY.FONT.StepperText}}>{`${text}`}</CText>)

  return (
    <View style={[GLOBAL.LAYOUT.row, GLOBAL.ATOMS.Stepper]}>
      <TouchableOpacity
        activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
        onPress={() => setCounter(counter + 1)}
      >{displayText('+')}</TouchableOpacity>
      {displayText(counter.toString())}
      <TouchableOpacity
        activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
        onPress={() => counter > 0 && setCounter(counter - 1)}
      >{displayText('-')}</TouchableOpacity>
    </View>
  )
};

const Badge: React.FC<BadgeProps> = ({ text }: BadgeProps) => (
  <View style={GLOBAL.ATOMS.Badge}>
    <CText style={GLOBAL.ATOMS.BadgeText}>{text}</CText>
  </View>
);

export { CImage, Pill, PillLight, Stepper, Badge };
