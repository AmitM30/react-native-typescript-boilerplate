import * as React from 'react';
import { SectionList, View } from 'react-native';

import styles from './styles';
import { CText } from '../../elements/inputs';

const DATA = [
  {
    title: 'Countries',
    data: ['India', 'USA', 'France'],
  },
  {
    title: 'Cities',
    data: ['New Delhi', 'Washington', 'Paris', 'Berlin', 'Wellington'],
  },
  {
    title: 'Currency',
    data: ['INR', 'USD', 'Euro', 'Euro', 'NZD'],
  },
];

interface Props {
  title: string;
}

const Item = ({ title }: Props) => (
  <View style={styles.item}>
    <CText style={styles.title}>{title}</CText>
  </View>
);

const List = () => {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <CText style={styles.header}>{title}</CText>
      )}
    />
  );
};

export default List;
