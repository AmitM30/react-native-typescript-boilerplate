import { StyleSheet } from 'react-native';

import { TYPOGRAPHY } from '../../styles/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: TYPOGRAPHY.COLOR.Default,
    marginHorizontal: 10,
  },
  image: {
    marginBottom: 20,
    width: 40,
    height: 40,
  },
  button: {
    alignSelf: 'center',
    marginTop: 50,
    width: 250,
  },
});

export default styles;
