import * as React from 'react';
import {
  FlatList, ListRenderItem, Pressable, StyleProp, View, ViewStyle
} from 'react-native';

import { CText } from './inputs';
import SVGIcons from '../assets/svgs';
import { Badge, CImage } from './atoms';
import { GLOBAL } from '../styles/global';
import { SectionTitle } from './section/title';
import { TYPOGRAPHY } from '../styles/typography';

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
  title: string;
  style?: StyleProp<ViewStyle>;
  image: any;
  onClick?: Callback;
}

type ListItemBadgeProps =
  | { showBadge?: false; text?: string }
  | { showBadge?: true; text: string; }


const Card: React.FC<Props> = (props: Props) => (
  <Pressable style={[GLOBAL.ELEMENTS.Card, props.style]} onPress={props.onClick}>
    {props.children}
  </Pressable>
);

const Carousel: React.FC<CarouselProps> = ({ data, title, item }: CarouselProps) => (
  <View>
    {title && <SectionTitle title={title} />}
    <FlatList
      keyExtractor={(_, index) => `flatlist-${index}-${Math.floor(Math.random() * 100)}`}
      data={data}
      renderItem={item}
      horizontal={true}
    />
  </View>
);

const ListItem: React.FC<ListItemProps & ListItemBadgeProps> = ({ title, onClick, image, style, showBadge = false, text }: ListItemProps & ListItemBadgeProps) => (
  <Pressable style={[GLOBAL.LAYOUT.row, GLOBAL.ELEMENTS.ListItem, style]} onPress={onClick}>
    <View style={[GLOBAL.LAYOUT.adjascent, { alignItems: 'center' }]}>
      <View style={GLOBAL.ATOMS.ListItemIcon}>
        <CImage
          style={TYPOGRAPHY.ELEMENTS.ListItemImage}
          path={image}
        />
      </View>
      <CText style={GLOBAL.ATOMS.ListItemTitle}>{title}</CText>
      {showBadge && text && <Badge text={text} />}
    </View>
    <SVGIcons.ChevronRight color={TYPOGRAPHY.COLOR.Paragraph} />
  </Pressable>
);

export { Card, Carousel, ListItem };
