import * as React from 'react';
import { SafeAreaView, SectionList, StyleSheet, View, StatusBar } from 'react-native';

import { CText } from '../../elements/custom';
// import { BUTTON_DEFAULT } from '../../elements/buttons';
// import { TYPOGRAPHY } from '../../styles/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    // marginHorizontal: 16
  },
  item: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginVertical: 8
  },
  header: {
    fontSize: 20,
    backgroundColor: "#EEE",
    borderWidth: 1,
    borderColor: '#DDD',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  title: {
    fontSize: 18
  }
});

const DATA = [
  {
    title: "Countries",
    data: ["India", "USA", "France"]
  },
  {
    title: "Cities",
    data: ["New Delhi", "Washington", "Paris", "Berlin", "Wellington"]
  },
  {
    title: "Currency",
    data: ["INR", "USD", "Euro", "Euro", "NZD"]
  }
];

interface Props {
  title: String
}

const Item = ({ title }: Props ) => (
  <View style={styles.item}>
    <CText style={styles.title}>{title}</CText>
  </View>
);

const List = () => {
  return <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <CText style={styles.header}>{title}</CText>
      )}
    />
  </SafeAreaView>
}

export default List;
