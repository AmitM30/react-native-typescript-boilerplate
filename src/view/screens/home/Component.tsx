import * as React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export interface Props {
  name: string;
}

interface State {
  name: string;
}

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: props.name || 'Amit',
    };
  }

  componentDidMount() {}

  render() {
    const { name } = this.state;

    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Text>{name}</Text>
      </View>
    );
  }
}

export default Home;
