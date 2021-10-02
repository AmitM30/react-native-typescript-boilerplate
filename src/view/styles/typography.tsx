import { Platform } from 'react-native';

const COLOR = {
  // CTA
  Primary: '#04C56A',
  Secondary: '#222222',
  Default: '#FFFFFF',
  DefaultSelected: '#222222',
  Border: '#E7E7E8',
  Success: '#2BC480',
  Warning: '#D91E5B',
  BgColor: '#F7F7F7',

  // Text
  Title: '#393939',
  SecondaryTitle: '#4E4E50',
  Paragraph: '#BDBEBF',
};

const FONT = {
  Primary: 'Helvetica',
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 16,
  },
  paragraph: {
    fontSize: 14,
  },
  input :{
    fontSize: 12,
    borderWidth: 0.5,
  },
};

const BUTTON = {
  primary: {
    height: 60,
    borderRadius: 5,
    text: {
      fontSize: 16,
    },
  },
  secondary: {
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 8,
    text: {
      fontSize: 16,
    },
  },
};

const SPACING = {
  page: 16,
};

const SHADOW = {
  shadowOpacity: 0.25,
  shadowRadius: 3,
  shadowOffset: { width: 3, height: 3 },
  elevation: Platform.OS === 'ios' ? 0 : 3,
};

const TYPOGRAPHY = {
  COLOR,
  FONT,
  BUTTON,
  SPACING,
  SHADOW,
};

export { TYPOGRAPHY };
