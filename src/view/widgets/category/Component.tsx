import * as React from 'react';
import { View } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { CText } from '../../elements/inputs';
import router from '../../../navigators/router';
import { Carousel } from '../../elements/layout';
import { SCREENS } from '../../../constants/screen';
import * as SVGIcons from '../../assets/svgs/category';
import { BUTTON_CATEGORY } from '../../elements/buttons';

interface Props {}

const data = [
  { title: 'Men', icon: <SVGIcons.Shoes /> },
  { title: 'Women', icon: <SVGIcons.Stileto /> },
  { title: 'Devices', icon: <SVGIcons.Bulb /> },
  { title: 'Gadgets', icon: <SVGIcons.Headset /> },
  { title: 'Games', icon: <SVGIcons.Gamepad /> },
  { title: 'Men', icon: <SVGIcons.Shoes /> },
  { title: 'Women', icon: <SVGIcons.Stileto /> },
  { title: 'Devices', icon: <SVGIcons.Bulb /> }
];

const onClick = () => {
  router.push({ componentId: SCREENS.Listings });
}

const renderItem = ({ item }: any) => {
  return (
    <View style={GLOBAL.ELEMENTS.CategoryIcons} key={`carousel-item-${item.title}`}>
      <BUTTON_CATEGORY onClick={onClick} icon={item.icon} />
      <CText style={GLOBAL.FONTS.body}>{item.title}</CText>
    </View>
  )
}

const CategoryWidget: React.FC<Props> = (props: Props) => {
  return (
    <Carousel title={'Categories'} data={data} item={renderItem} />
  )
}

export default CategoryWidget;
