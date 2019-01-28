import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class Splash extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text>Splash</Text>
      </View>
    );
  }
}

export default Splash;
