import * as React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';

import { tabbedNavigation } from '../../../navigators/navigation';
import styles from './styles';

export interface Props {}

interface State {}

class Splash extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  navigateToHome = () => {
    tabbedNavigation();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text>Splash</Text>
          <Button title="Continue" onPress={this.navigateToHome} />
        </View>
      </SafeAreaView>
    );
  }
}

export default Splash;
