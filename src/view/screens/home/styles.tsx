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
    width: 36,
    height: 36,
    alignSelf: 'flex-end',
    marginHorizontal: 6,
  },
  header: {
    display: 'flex',
  },
  button: {
    alignSelf: 'center',
    marginVertical: 10,
    width: 200,
  },
});

export default styles;
