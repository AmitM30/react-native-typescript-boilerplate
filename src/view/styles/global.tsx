import { StyleSheet } from 'react-native';

import { TYPOGRAPHY } from './typography';

export const widgetPaddingValue = 16;

const LAYOUT = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: TYPOGRAPHY.COLOR.Default,
  },
  container: {
    flex: 1,
  },
  pageContainer: {
    padding: TYPOGRAPHY.SPACING.page,
  },
  shadow: TYPOGRAPHY.SHADOW,
});

const CTA = {
  Style: StyleSheet.create({
    primary: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: TYPOGRAPHY.COLOR.Primary,
      height: TYPOGRAPHY.BUTTON.primary.height,
      borderRadius: TYPOGRAPHY.BUTTON.primary.borderRadius,
    },
    primaryText: {
      textAlign: 'center',
      color: TYPOGRAPHY.COLOR.Default,
      fontSize: TYPOGRAPHY.BUTTON.primary.text.fontSize,
    },
    secondary: {
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: TYPOGRAPHY.COLOR.Primary,
      backgroundColor: TYPOGRAPHY.COLOR.Default,
      height: TYPOGRAPHY.BUTTON.secondary.height,
      borderWidth: TYPOGRAPHY.BUTTON.secondary.borderWidth,
      borderRadius: TYPOGRAPHY.BUTTON.secondary.borderRadius,
      paddingHorizontal: TYPOGRAPHY.BUTTON.secondary.paddingHorizontal,
    },
    secondaryText: {
      textAlign: 'center',
      color: TYPOGRAPHY.COLOR.Primary,
      fontSize: TYPOGRAPHY.BUTTON.secondary.text.fontSize,
    },
  }),
  TouchableOpacity: {
    default: 0.8,
  },
};

const FONTS = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: TYPOGRAPHY.FONT.title.fontSize,
    fontFamily: TYPOGRAPHY.FONT.Primary,
    color: TYPOGRAPHY.COLOR.DefaultSelected,
  },
  body: {
    color: TYPOGRAPHY.COLOR.Paragraph,
    fontFamily: TYPOGRAPHY.FONT.Primary,
    fontSize: TYPOGRAPHY.FONT.paragraph.fontSize,
  },
  subTitle: {
    color: TYPOGRAPHY.COLOR.Secondary,
    fontFamily: TYPOGRAPHY.FONT.Primary,
    fontSize: TYPOGRAPHY.FONT.subtitle.fontSize,
  },
});

const TEXT = StyleSheet.create({
  Default: {
    textAlign: 'left',
    color: TYPOGRAPHY.COLOR.Paragraph,
    fontFamily: TYPOGRAPHY.FONT.Primary,
    fontSize: TYPOGRAPHY.FONT.paragraph.fontSize,
  },
  Bold: {
    textAlign: 'left',
    color: TYPOGRAPHY.COLOR.Paragraph,
    fontFamily: TYPOGRAPHY.FONT.Primary,
    fontSize: TYPOGRAPHY.FONT.paragraph.fontSize,
  },
});

const TEXT_INPUT = {
  Style: StyleSheet.create({
    Default: {
      color: TYPOGRAPHY.COLOR.Primary,
      fontFamily: TYPOGRAPHY.FONT.Primary,
      borderColor: TYPOGRAPHY.COLOR.Border,
      fontSize: TYPOGRAPHY.FONT.input.fontSize,
      borderWidth: TYPOGRAPHY.FONT.input.borderWidth,
    },
    Bold: {
      color: TYPOGRAPHY.COLOR.Primary,
      fontFamily: TYPOGRAPHY.FONT.Primary,
      borderColor: TYPOGRAPHY.COLOR.Border,
      fontSize: TYPOGRAPHY.FONT.input.fontSize,
      borderWidth: TYPOGRAPHY.FONT.input.borderWidth,
    },
  }),
};

const GLOBAL = {
  LAYOUT,
  CTA,
  FONTS,
  TEXT,
  TEXT_INPUT,
};

export { GLOBAL };
