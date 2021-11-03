import * as React from 'react';
import {
  FlatList, ListRenderItem, Pressable, StyleProp, View, ViewStyle,
} from 'react-native';

import { CTEXT } from './custom';
import { GLOBAL } from '../styles/global';
import locale from '../../constants/locale';

type Callback = () => any;
interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onClick?: Callback;
}

interface CarouselProps {
  data: any[];
  title?: string;
  item: ListRenderItem<React.ReactElement>;
}

const Card: React.FC<Props> = (props: Props) => (
  <Pressable style={[GLOBAL.ELEMENTS.Card, props.style]} onPress={props.onClick}>
    {props.children}
  </Pressable>
);

const Carousel: React.FC<CarouselProps> = ({ title, data, item }: CarouselProps) => (
  <View>
    <FlatList
      ListHeaderComponent={() => <CTEXT>{title || locale.Categories}</CTEXT>}
      keyExtractor={(_, index) => `flatlist-${index}-${Math.floor(Math.random() * 100)}`}
      data={data}
      renderItem={item}
      horizontal={true}
    />
  </View>
);

export { Card, Carousel };
