import * as React from 'react';
import { View } from 'react-native';

import { GLOBAL } from '../styles/global';
import { CTEXT } from '../elements/custom';
import locale from '../../constants/locale';
import router from '../../navigators/router';
import { Card, Carousel } from '../elements/layout';
import { BUTTON_DEFAULT } from '../elements/buttons';

interface Props {
  componentId: string;
}

const data = [
  { title: 'Men' },
  { title: 'Women' },
  { title: 'Devices' },
  { title: 'Gadgets' },
  { title: 'Games' },
  { title: 'Men' },
  { title: 'Women' },
  { title: 'Devices' },
];

const Category: React.FC<Props> = ({ componentId }: Props) => {

  const renderItem = ({ item }: any) => {
    return (
      <View style={GLOBAL.ELEMENTS.CategoryIcons} key={`carousel-item-${item.title}`}>
        <BUTTON_DEFAULT
          title={item.title}
          onClick={() => router.showListingsScreen({ componentId, passProps: { query: item.title } }, item.title)}
        />
        <CTEXT style={GLOBAL.FONTS.body}>{item.title}</CTEXT>
      </View>
    );
  };

  return (
    <Card>
      <Carousel title={locale.Categories} data={data} item={renderItem} />
    </Card>
  );
};

export default Category;
