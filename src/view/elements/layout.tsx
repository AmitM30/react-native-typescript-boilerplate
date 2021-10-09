import * as React from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';

import { SectionTitle } from './section/title';

export interface Props {
  children: React.ReactElement[]
}

export interface CarouselProps {
  data: any[];
  title?: string;
  item: ListRenderItem<React.ReactElement>;
}

const Card: React.FC<Props> = (props: Props) => (
  <View>
    {props.children}
  </View>
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

export { Card, Carousel }
