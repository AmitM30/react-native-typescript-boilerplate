import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export interface Props {}

interface State {}

class Settings extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }
}

export default Settings;
