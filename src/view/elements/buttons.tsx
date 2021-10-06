import * as React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

import { CText } from './inputs';
import { GLOBAL } from '../styles/global';

type Callback = () => any;
export interface BaseProps {
  onClick: Callback;
  style?: ViewStyle;
}

export interface ButtonProps extends BaseProps {
  title: string;
}

export interface IconProps extends BaseProps {
  icon: React.ReactElement;
}

/**
 * Primary Button
 */
const BUTTON_PRIMARY: React.FC<ButtonProps> = ({ title, onClick, style }: ButtonProps) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    style={[GLOBAL.CTA.Style.primary, GLOBAL.LAYOUT.shadow, style]}
    onPress={onClick}
  >
    <CText style={GLOBAL.CTA.Style.primaryText}>{title.toLocaleUpperCase()}</CText>
  </TouchableOpacity>
);

/**
 * Secondary Button
 */
const BUTTON_SECONDARY: React.FC<ButtonProps> = ({ title, onClick, style }: ButtonProps) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    style={[GLOBAL.CTA.Style.secondary, style]}
    onPress={onClick}
  >
    <CText style={GLOBAL.CTA.Style.secondaryText}>{title.toLocaleUpperCase()}</CText>
  </TouchableOpacity>
);

/**
 * Category Icon Button
 */
const BUTTON_CATEGORY: React.FC<IconProps> = ({ icon, onClick, style }: IconProps) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    style={[GLOBAL.CTA.Style.categoryIcons, style]}
    onPress={onClick}
  >
    {icon}
  </TouchableOpacity>
);

export {
  BUTTON_PRIMARY,
  BUTTON_SECONDARY,
  BUTTON_CATEGORY
};
