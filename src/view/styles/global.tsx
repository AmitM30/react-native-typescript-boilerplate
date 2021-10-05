import { StyleSheet } from 'react-native';

import { TYPOGRAPHY } from './typography';

export const widgetPaddingValue = 16;

const LAYOUT = StyleSheet.create({
  SafeArea: {
    flex: 1,
    display: 'flex',
    backgroundColor: TYPOGRAPHY.COLOR.Default,
  },
  container: {
    flex: 1,
  },
  pageContainer: {
    marginHorizontal: TYPOGRAPHY.SPACING.page,
  },
  shadow: TYPOGRAPHY.SHADOW,
});

const CTA = {
  Style: StyleSheet.create({
    primary: {
      alignItems: 'center',
      justifyContent: 'center',
      height: TYPOGRAPHY.BUTTON.primary.height,
      backgroundColor: TYPOGRAPHY.COLOR.Primary,
      borderRadius: TYPOGRAPHY.BUTTON.primary.borderRadius,
      marginVertical: TYPOGRAPHY.BUTTON.primary.marginVertical,
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
    categoryIcons: {
      alignItems: 'center',
      justifyContent: 'center',
      height: TYPOGRAPHY.BUTTON.category.radius,
      width: TYPOGRAPHY.BUTTON.category.radius,
      backgroundColor: TYPOGRAPHY.COLOR.Default,
      borderRadius: TYPOGRAPHY.BUTTON.category.borderRadius,
      marginVertical: TYPOGRAPHY.BUTTON.category.marginVertical,
      ...TYPOGRAPHY.SHADOW
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
      color: TYPOGRAPHY.COLOR.DefaultSelected,
      height: TYPOGRAPHY.FONT.input.height,
      borderRadius: TYPOGRAPHY.FONT.input.borderRadius,
      backgroundColor: TYPOGRAPHY.COLOR.BgColor,
      fontFamily: TYPOGRAPHY.FONT.Primary,
      borderColor: TYPOGRAPHY.COLOR.Border,
      fontSize: TYPOGRAPHY.FONT.input.fontSize,
      borderWidth: TYPOGRAPHY.FONT.input.borderWidth,
      paddingHorizontal: TYPOGRAPHY.FONT.input.paddingHorizontal
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
