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

class Drawer extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CText>Drawer Menu</CText>
      </SafeAreaView>
    );
  }
}

export default Drawer;
