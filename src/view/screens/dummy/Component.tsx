import * as React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';
import { CText } from '../../elements/custom';

export interface Props {
  dummyText: string;
  componentId: string;
}

interface State {
  name: string;
}

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { dummyText } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <CText>This Screen has been pushed over Home screen</CText>
        <CText>Prop passed: {dummyText}</CText>
      </SafeAreaView>
    );
  }
}

export default Home;
