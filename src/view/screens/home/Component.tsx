import * as React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';
import { CText } from '../../elements/custom';

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
      name: props.name || 'Redux + TypeScript + React Native Navigation',
    };
  }

  componentDidMount() {}

  render() {
    const { name } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <CText>Home</CText>
        <CText>{name}</CText>
      </SafeAreaView>
    );
  }
}

export default Home;
