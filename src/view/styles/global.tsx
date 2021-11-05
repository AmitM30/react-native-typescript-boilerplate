import { StyleSheet, TextStyle } from 'react-native';

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
  sectionTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: TYPOGRAPHY.ELEMENTS.SectionTitle.marginBottom,
  },
  adjascent: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  listings: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    marginTop: -91, // TODO: The status bar height to come from Config.
  },
  detailsContainer: {
    marginVertical: TYPOGRAPHY.ELEMENTS.detailsContainer.marginVertical
  },
  PillSection: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  cart: {
    marginTop: TYPOGRAPHY.ELEMENTS.cartContainer.marginVertical,
  }
});

const ATOMS = StyleSheet.create({
  Stepper: {
    alignItems: 'center',
    ...TYPOGRAPHY.ELEMENTS.Stepper,
    backgroundColor: TYPOGRAPHY.COLOR.BgColor,
  },
  Pill: {
    ...TYPOGRAPHY.ELEMENTS.Pill,
    backgroundColor: TYPOGRAPHY.COLOR.BgColor,
  },
  Badge: {
    ...TYPOGRAPHY.ELEMENTS.Badge,
    backgroundColor: TYPOGRAPHY.COLOR.BadgeBgColor,
  },
  BadgeText: {
    color: TYPOGRAPHY.COLOR.Default,
    fontSize: TYPOGRAPHY.FONT.badge.fontSize,
    fontWeight: (TYPOGRAPHY.FONT.badge as TextStyle).fontWeight,
  },
  ListItemIcon: {
    ...TYPOGRAPHY.FONT.ListItemIcon,
    backgroundColor: TYPOGRAPHY.COLOR.IconBgColor,
  },
  ListItemTitle: {
    color: TYPOGRAPHY.COLOR.DefaultSelected,
    fontSize: TYPOGRAPHY.FONT.ListItemTitle.fontSize,
  },
});

const ELEMENTS = StyleSheet.create({
  CategoryIcons: {
    alignItems: 'center',
    marginRight: TYPOGRAPHY.ELEMENTS.CategoryIcons.marginRight,
  },
  SearchInput: {
    flex: 1
  },
  Header: {
    marginVertical: TYPOGRAPHY.ELEMENTS.Header.marginVertical
  },
  Card: {
    marginBottom: TYPOGRAPHY.ELEMENTS.Card.marginBottom
  },
  ListItem: {
    alignItems: 'center',
    ...TYPOGRAPHY.ELEMENTS.ListItem,
  },
  LinksWidget: {
    marginVertical: TYPOGRAPHY.ELEMENTS.LinksWidget.marginVertical,
  },
  LinksWidgetSelected: {
    top: -4,
    position: 'relative',
    fontSize: TYPOGRAPHY.ELEMENTS.LinksWidget.fontSize,
    color: TYPOGRAPHY.COLOR.Secondary,
  },
  BottomControl: {
    bottom: 0,
    width: '100%',
    position: 'relative',
    backgroundColor: TYPOGRAPHY.COLOR.Default,
    ...TYPOGRAPHY.ELEMENTS.BottomControl,
    ...TYPOGRAPHY.BOTTOM_CONTROL_SHADOW,
  },
  BottomControlButton: {
    width: TYPOGRAPHY.ELEMENTS.BottomControlButton.width,
  },
  PillLight: {
    alignItems: 'center',
    ...TYPOGRAPHY.ELEMENTS.PillLight,
    borderColor: TYPOGRAPHY.COLOR.BgColor,
    marginRight: TYPOGRAPHY.ELEMENTS.Pill.marginRight,
    borderRadius: TYPOGRAPHY.ELEMENTS.Pill.borderRadius,
  },
  CartItem: {
    marginBottom: TYPOGRAPHY.ELEMENTS.CartItem.marginBottom,
  },
  PriceSection: {
    borderColor: TYPOGRAPHY.COLOR.Border,
    marginBottom: TYPOGRAPHY.ELEMENTS.PriceSection.marginBottom,
    borderTopWidth: TYPOGRAPHY.ELEMENTS.PriceSection.borderWidth,
    borderBottomWidth: TYPOGRAPHY.ELEMENTS.PriceSection.borderWidth,
    paddingVertical: TYPOGRAPHY.ELEMENTS.PriceSection.paddingVertical,
  },
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
      paddingHorizontal: TYPOGRAPHY.BUTTON.primary.paddingHorizontal,
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
      marginVertical: TYPOGRAPHY.BUTTON.secondary.marginVertical,
      paddingHorizontal: TYPOGRAPHY.BUTTON.secondary.paddingHorizontal,
    },
    secondaryText: {
      textAlign: 'center',
      color: TYPOGRAPHY.COLOR.Secondary,
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
    },
    cameraIcon: {
      color: TYPOGRAPHY.COLOR.Default,
      backgroundColor: TYPOGRAPHY.COLOR.Primary,
      width: TYPOGRAPHY.BUTTON.cameraIcon.radius,
      height: TYPOGRAPHY.BUTTON.cameraIcon.radius,
      borderRadius: TYPOGRAPHY.BUTTON.cameraIcon.borderRadius,
      marginVertical: TYPOGRAPHY.BUTTON.cameraIcon.marginVertical,
      marginLeft: TYPOGRAPHY.BUTTON.cameraIcon.marginLeft,
    },
  }),
  TouchableOpacity: {
    default: 0.8,
  },
};

const FONTS = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontFamily: TYPOGRAPHY.FONT.Primary,
    fontSize: TYPOGRAPHY.FONT.title.fontSize,
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
    fontWeight: (TYPOGRAPHY.FONT.subtitle.textStyle as TextStyle).fontWeight,
    marginVertical: TYPOGRAPHY.FONT.subtitle.margin,
  },
  price: {
    color: TYPOGRAPHY.COLOR.Primary,
    fontSize: TYPOGRAPHY.FONT.price.fontSize,
    fontWeight: (TYPOGRAPHY.FONT.price.textStyle as TextStyle).fontWeight,
    marginTop: TYPOGRAPHY.FONT.price.margin,
  },
  image: {
    borderRadius: TYPOGRAPHY.IMAGE.borderRadius
  }
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
    fontFamily: TYPOGRAPHY.FONT.Primary,
    color: TYPOGRAPHY.COLOR.DefaultSelected,
    fontSize: TYPOGRAPHY.FONT.paragraph.fontSize,
    fontWeight: (TYPOGRAPHY.FONT.bold as TextStyle).fontWeight,
  },
});

const TEXT_INPUT = {
  Style: StyleSheet.create({
    Default: {
      ...TYPOGRAPHY.FONT.input,
      color: TYPOGRAPHY.COLOR.DefaultSelected,
      backgroundColor: TYPOGRAPHY.COLOR.BgColor,
      fontFamily: TYPOGRAPHY.FONT.Primary,
      borderColor: TYPOGRAPHY.COLOR.Border,
    },
    Bold: {
      color: TYPOGRAPHY.COLOR.Primary,
      fontFamily: TYPOGRAPHY.FONT.Primary,
      borderColor: TYPOGRAPHY.COLOR.Border,
      fontSize: TYPOGRAPHY.FONT.input.fontSize,
      borderWidth: TYPOGRAPHY.FONT.input.borderWidth,
    },
    Search: {
      left: 0,
      width: '100%',
      position: 'absolute',
      paddingHorizontal: TYPOGRAPHY.FONT.searchInput.paddingHorizontal,
    },
  }),
};

const GLOBAL = {
  LAYOUT,
  ATOMS,
  ELEMENTS,
  CTA,
  FONTS,
  TEXT,
  TEXT_INPUT,
};

export { GLOBAL };
