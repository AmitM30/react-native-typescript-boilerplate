import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}

export default Home;
