const COLOR = {
  // CTA
  Primary: '#565656',
  Secondary: '#399BE0',
  Default: '#FFFFFF',
  DefaultSelected: '#222222',
  Border: '#E7E7E8',
  Success: '#2BC480',
  Warning: '#D91E5B',

  // Status Bar
  StatusBar: 'transparent',
};

const FONT = {
  Primary: 'Helvetica',
  h1: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    height: 36,
    fontSize: 14,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 12,
  },
};

const BUTTON = {
  radius: 5,
  primary: {
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    justifyContent: 'center',
    paddingHorizontal: 20,
    text: {
      fontSize: 14,
    },
  },
  secondary: {
    height: 48,
    borderWidth: 1,
    borderRadius: 5,
    text: {
      fontSize: 14,
    },
  },
};

const ELEMENTS = {
  CategoryIcons: { marginRight: 20 },
  Card: { marginBottom: 30 },
};

const TYPOGRAPHY = {
  COLOR,
  FONT,
  BUTTON,
  ELEMENTS,
};

export { TYPOGRAPHY };
