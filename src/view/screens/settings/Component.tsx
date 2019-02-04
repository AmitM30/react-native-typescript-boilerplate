import * as React from 'react';
import { View } from 'react-native';

import styles from './styles';
import { CText } from '../../elements/custom';

export interface Props {}

interface State {}

class Settings extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <CText>Settings</CText>
      </View>
    );
  }
}

export default Settings;
