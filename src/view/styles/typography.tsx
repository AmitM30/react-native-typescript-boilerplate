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

  // StatusBar
  StatusBar: 'transparent',
};

const FONT = {
  Primary: 'Helvetica',
  title: {
    fontSize: 22,
  },
  subtitle: {
    fontSize: 16,
    textStyle: {
      fontWeight: 'bold',
    },
    margin: 4,
  },
  paragraph: {
    fontSize: 14,
  },
  input :{
    height: 36,
    fontSize: 14,
    borderWidth: 0.5,
    borderRadius: 18,
    paddingHorizontal: 12,
  },
  searchInput: {
    paddingHorizontal: 40,
  },
  price: {
    fontSize: 16,
    textStyle: {
      fontWeight: 'bold',
    },
    margin: 8,
  },
};

const BUTTON = {
  primary: {
    height: 54,
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 8,
    text: {
      fontSize: 14,
    },
  },
  secondary: {
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 8,
    text: {
      fontSize: 14,
    },
  },
  category: {
    radius: 48,
    borderRadius: 24,
    marginVertical: 5,
    text: {
      fontSize: 16,
    },
  },
  cameraIcon: {
    radius: 36,
    borderRadius: 18,
    marginVertical: 0,
    marginLeft: 15,
    icon: { width: 24, height: 24 }
  },
};

const SPACING = {
  page: 10,
};

const SHADOW = {
  shadowOpacity: 0.20,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 0 },
  elevation: Platform.OS === 'ios' ? 0 : 5,
};

const ELEMENTS = {
  SearchInput: {
    width: 24,
    height: 24,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  ProductDisplay: {
    width: '48%',
  },
  SectionTitle: {
    marginBottom: 20,
  },
  CategoryIcons: { marginRight: 20 },
  Header: {
    marginVertical: 5
  },
  Card: { marginBottom: 30 },
  ListItem: { marginBottom: 20 },
};

const TYPOGRAPHY = {
  COLOR,
  FONT,
  BUTTON,
  SPACING,
  SHADOW,
  ELEMENTS,
};

export { TYPOGRAPHY };
