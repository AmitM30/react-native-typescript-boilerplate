import * as React from 'react';
import {
  FlatList, ListRenderItem, Pressable, StyleProp, ViewStyle,
} from 'react-native';

import { GLOBAL } from '../styles/global';

type Callback = () => any;
interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onClick?: Callback;
}

interface CarouselProps {
  data: any[];
  item: ListRenderItem<React.ReactElement>;
}

const Card: React.FC<Props> = (props: Props) => (
  <Pressable style={[GLOBAL.ELEMENTS.Card, props.style]} onPress={props.onClick}>
    {props.children}
  </Pressable>
);

const Carousel: React.FC<CarouselProps> = ({ data, item }: CarouselProps) => (
  <FlatList
    keyExtractor={(_, index) => `flatlist-${index}-${Math.floor(Math.random() * 100)}`}
    data={data}
    renderItem={item}
    horizontal={true}
  />
);

export { Card, Carousel };
