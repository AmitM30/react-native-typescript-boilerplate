import * as React from 'react';
import { Pressable } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { CText } from '../../elements/inputs';
import { Card, Carousel } from '../../elements/layout';

interface Props {
  selectedCategory?: string;
  componentId: string;
  onSelected: (text: string) => void;
}

const data = [
  { title: 'All' },
  { title: 'Headphones' },
  { title: 'Speakers' },
  { title: 'Microphones' },
  { title: 'Earphones' },
];

const LinksWidget: React.FC<Props> = ({ componentId, selectedCategory, onSelected }: Props) => {
  const [selected, setSelected] = React.useState(selectedCategory)

  const renderItem = ({ item }: any) => {
    return (
      <Pressable
        key={`links-item-${item.title}`}
        style={GLOBAL.ELEMENTS.CategoryIcons}
        onPress={() => {
          setSelected(item.title);
          onSelected(item.title)
        }}
      >
        <CText style={
          [
            GLOBAL.FONTS.body,
            selected === item.title && GLOBAL.ELEMENTS.LinksWidgetSelected
          ]}
        >{item.title}</CText>
      </Pressable>
    );
  };

  return (
    <Card style={GLOBAL.ELEMENTS.LinksWidget}>
      <Carousel data={data} item={renderItem} />
    </Card>
  );
};

export default LinksWidget;
