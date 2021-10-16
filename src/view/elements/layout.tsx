import * as React from 'react';
import { FlatList, ListRenderItem, Pressable, StyleProp, Touchable, View, ViewStyle } from 'react-native';
import { GLOBAL } from '../styles/global';

import { SectionTitle } from './section/title';

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

interface ListItemProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onClick?: Callback;
}

const Card: React.FC<Props> = (props: Props) => (
  <Pressable style={[GLOBAL.ELEMENTS.Card, props.style]} onPress={props.onClick}>
    {props.children}
  </Pressable>
);

const Carousel: React.FC<CarouselProps> = ({ data, title, item }: CarouselProps) => (
  <View>
    {title && <SectionTitle title={title} />}
    <FlatList
      keyExtractor={(item, index) => `flatlist-${index}-${Math.floor(Math.random() * 100)}`}
      data={data}
      renderItem={item}
      horizontal={true}
    />
  </View>
);

const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => (
  <Pressable style={[GLOBAL.ELEMENTS.ListItem, props.style]} onPress={props.onClick}>
    {props.children}
  </Pressable>
);

export { Card, Carousel, ListItem };
