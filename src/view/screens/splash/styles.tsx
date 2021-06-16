import { StyleSheet } from 'react-native';

import { TYPOGRAPHY } from '../../styles/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: TYPOGRAPHY.COLOR.Default,
  },
  menu: {
    width: 44,
    height: 44,
    marginHorizontal: 10
  },
  image: {
    width: '70%',
  },
});

export default styles;
