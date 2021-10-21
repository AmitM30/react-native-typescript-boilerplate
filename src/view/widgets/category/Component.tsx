import * as React from 'react';
import { View } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { CText } from '../../elements/inputs';
import router from '../../../navigators/router';
import { SCREENS } from '../../../constants/screen';
import { Card, Carousel } from '../../elements/layout';
import * as SVGIcons from '../../assets/svgs/category';
import { BUTTON_CATEGORY } from '../../elements/buttons';

interface Props {
  componentId: string;
}

const data = [
  { title: 'Men', icon: <SVGIcons.Shoes /> },
  { title: 'Women', icon: <SVGIcons.Stileto /> },
  { title: 'Devices', icon: <SVGIcons.Bulb /> },
  { title: 'Gadgets', icon: <SVGIcons.Headset /> },
  { title: 'Games', icon: <SVGIcons.Gamepad /> },
  { title: 'Men', icon: <SVGIcons.Shoes /> },
  { title: 'Women', icon: <SVGIcons.Stileto /> },
  { title: 'Devices', icon: <SVGIcons.Bulb /> },
];

const CategoryWidget: React.FC<Props> = ({ componentId }: Props) => {

  const renderItem = ({ item }: any) => {
    return (
      <View style={GLOBAL.ELEMENTS.CategoryIcons} key={`carousel-item-${item.title}`}>
        <BUTTON_CATEGORY
          onClick={() => router.showListingsScreen({ componentId }, item.title)}
          icon={item.icon}
        />
        <CText style={GLOBAL.FONTS.body}>{item.title}</CText>
      </View>
    );
  };

  return (
    <Card>
      <Carousel title={'Categories'} data={data} item={renderItem} />
    </Card>
  );
};

export default CategoryWidget;
