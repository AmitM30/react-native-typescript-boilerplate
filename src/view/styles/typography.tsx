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
  Paragraph: '#868686',

  // StatusBar
  StatusBar: 'transparent',
  DefaultBlue: '#3F51B5',

  // Icons
  IconBgColor: '#ECFBF5',
  BadgeBgColor: '#E40056',
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
    fontSize: 12,
  },
  bold: {
    fontWeight: 'bold',
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
  ListItemIcon: {
    padding: 5,
    borderRadius: 3,
    marginRight: 15,
  },
  ListItemTitle: {
    fontSize: 16,
  },
  StepperText: {
    fontSize: 14,
    paddingHorizontal: 12,
    includeFontPadding: true,
  },
  badge: {
    fontSize: 10,
    fontWeight: 'bold'
  }
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
    height: 54,
    borderRadius: 5,
    marginVertical: 5,
    borderWidth: 1,
    paddingHorizontal: 20,
    text: {
      fontSize: 12,
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
    icon: { width: 22, height: 22 }
  },
};

const IMAGE = {
  borderRadius: 5
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

const BOTTOM_CONTROL_SHADOW = {
  shadowOpacity: 0.10,
  shadowRadius: 3,
  shadowOffset: { width: 0, height: -5 },
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
    marginBottom: 20,
  },
  SectionTitle: {
    marginBottom: 20,
  },
  CategoryIcons: { marginRight: 20 },
  Header: {
    marginVertical: 5
  },
  Card: { marginBottom: 30 },
  ListItem: { paddingRight: 20, marginBottom: 30 },
  ListItemImage: { width: 20, height: 20 },
  LinksWidget: {
    marginVertical: 20,
    fontSize: 20
  },
  BottomControl: {
    paddingVertical: 5,
    paddingHorizontal: 30,
  },
  detailsContainer: {
    marginVertical: 20
  },
  BottomControlButton: {
    width: '48%'
  },
  Pill: {
    marginRight: 5,
    marginBottom: 20,
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  PillLight: {
    width: '100%',
    maxWidth: '50%',
    borderWidth: 1,
    paddingVertical: 8,
  },
  Stepper: {
    height: 32,
    width: 100,
    borderWidth: 1,
    borderRadius: 5,
  },
  CartItem: {
    marginBottom: 10,
    image: {
      height: 100,
      width: 100,
    },
    container: { flex: 1, marginLeft: 30 },
    price: {
      marginTop: 0,
      marginBottom: 15
    }
  },
  PriceSection: {
    borderWidth: 1,
    paddingVertical: 20,
    marginBottom: 20,
  },
  cartContainer: {
    marginVertical: 40,
  },
  Badge: {
    marginLeft: 20,
    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
};

const TYPOGRAPHY = {
  COLOR,
  FONT,
  BUTTON,
  SPACING,
  SHADOW,
  BOTTOM_CONTROL_SHADOW,
  ELEMENTS,
  IMAGE,
};

export { TYPOGRAPHY };
