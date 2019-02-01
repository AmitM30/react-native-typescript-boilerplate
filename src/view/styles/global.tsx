import { StyleSheet, Platform } from 'react-native';

import TYPOGRAPHY from './typography';

export const WidgetPaddingValue = 16;

const Layout = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: TYPOGRAPHY.Color.Primary
  },
  container: {
    flex: 1
  },
  pageContainer: {
    padding: 16
  },
  shadow: {
    shadowOpacity: 0.5,
    shadowRadius: 2.5,
    shadowOffset: { width: 2, height: 2 },
    elevation: Platform.OS === 'ios' ? 0 : 7
  }
});

const CTA = {
  Style: StyleSheet.create({
    primary: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 48,
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 5
    },
    primaryText: {
      fontSize: 16,
      color: TYPOGRAPHY.Color.Primary,
      textAlign: 'center'
    },
    secondary: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 48,
      borderWidth: 1,
      backgroundColor: TYPOGRAPHY.Color.Default,
      borderRadius: 5,
      borderColor: TYPOGRAPHY.Color.Primary
    },
    secondaryText: {
      color: TYPOGRAPHY.Color.Primary,
      fontSize: 16,
      textAlign: 'center'
    }
  }),
  TouchableOpacity: {
    default: 0.8
  }
};

const Fonts = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontFamily: TYPOGRAPHY.Font.Primary,
    color: TYPOGRAPHY.Color.DefaultSelected
  },
  body: {
    fontSize: 16,
    fontFamily: TYPOGRAPHY.Font.Primary,
    color: TYPOGRAPHY.Color.Default
  },
  subTitle: {
    fontSize: 14,
    fontFamily: TYPOGRAPHY.Font.Primary,
    color: TYPOGRAPHY.Color.Secondary
  }
});

const Text = StyleSheet.create({
  Default: {
    textAlign: 'left',
    fontFamily: TYPOGRAPHY.Font.Primary,
    fontSize: 14,
    color: TYPOGRAPHY.Color.Primary
  },
  Bold: {
    textAlign: 'left',
    fontSize: 14,
    fontFamily: TYPOGRAPHY.Font.Primary,
    color: TYPOGRAPHY.Color.Primary
  }
});

const TextInput = {
  Style: StyleSheet.create({
    Default: {
      fontFamily: TYPOGRAPHY.Font.Primary,
      textAlign: 'left',
      fontSize: 12,
      borderWidth: 0.2,
      borderColor: TYPOGRAPHY.Color.Border,
      color: TYPOGRAPHY.Color.Primary
    },
    Bold: {
      fontFamily: TYPOGRAPHY.Font.Primary,
      textAlign: 'left',
      fontSize: 12,
      borderWidth: 0.2,
      borderColor: TYPOGRAPHY.Color.Border,
      color: TYPOGRAPHY.Color.Primary
    }
  })
};

const GLOBAL = {
  Layout,
  CTA,
  Fonts,
  Text,
  TextInput
};

export default GLOBAL;
