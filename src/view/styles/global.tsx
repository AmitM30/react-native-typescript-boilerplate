import { StyleSheet, Platform } from 'react-native';

import { TYPOGRAPHY } from './typography';

export const widgetPaddingValue = 16;

const LAYOUT = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: TYPOGRAPHY.COLOR.Primary,
  },
  container: {
    flex: 1,
  },
  pageContainer: {
    padding: 16,
  },
  shadow: {
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowOffset: { width: 3, height: 3 },
    elevation: Platform.OS === 'ios' ? 0 : 3,
  },
});

const CTA = {
  Style: StyleSheet.create({
    primary: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 48,
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 10,
      borderWidth: 1,
      backgroundColor: TYPOGRAPHY.COLOR.Default,
    },
    primaryText: {
      fontSize: 16,
      color: TYPOGRAPHY.COLOR.Primary,
      textAlign: 'center',
    },
    secondary: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 48,
      borderWidth: 1,
      backgroundColor: TYPOGRAPHY.COLOR.Default,
      borderRadius: 5,
      borderColor: TYPOGRAPHY.COLOR.Primary,
    },
    secondaryText: {
      color: TYPOGRAPHY.COLOR.Primary,
      fontSize: 16,
      textAlign: 'center',
    },
  }),
  TouchableOpacity: {
    default: 0.8,
  },
};

const FONTS = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontFamily: TYPOGRAPHY.FONT.Primary,
    color: TYPOGRAPHY.COLOR.DefaultSelected,
  },
  body: {
    fontSize: 16,
    fontFamily: TYPOGRAPHY.FONT.Primary,
    color: TYPOGRAPHY.COLOR.Default,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: TYPOGRAPHY.FONT.Primary,
    color: TYPOGRAPHY.COLOR.Secondary,
  },
});

const TEXT = StyleSheet.create({
  Default: {
    textAlign: 'left',
    fontFamily: TYPOGRAPHY.FONT.Primary,
    fontSize: 14,
    color: TYPOGRAPHY.COLOR.Primary,
  },
  Bold: {
    textAlign: 'left',
    fontSize: 14,
    fontFamily: TYPOGRAPHY.FONT.Primary,
    color: TYPOGRAPHY.COLOR.Primary,
  },
});

const TEXT_INPUT = {
  Style: StyleSheet.create({
    Default: {
      fontFamily: TYPOGRAPHY.FONT.Primary,
      textAlign: 'left',
      fontSize: 12,
      borderWidth: 0.2,
      borderColor: TYPOGRAPHY.COLOR.Border,
      color: TYPOGRAPHY.COLOR.Primary,
    },
    Bold: {
      fontFamily: TYPOGRAPHY.FONT.Primary,
      textAlign: 'left',
      fontSize: 12,
      borderWidth: 0.2,
      borderColor: TYPOGRAPHY.COLOR.Border,
      color: TYPOGRAPHY.COLOR.Primary,
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
