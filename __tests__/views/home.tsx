import 'react-native';
import reactTestRenderer from 'react-test-renderer';

import * as Home from '../../src/view/screens/home';
// Note: test renderer must be required after react-native.

it('renders correctly with defaults', () => {
  const tree = reactTestRenderer.create(<Home name="Amit" />).toJSON();
  expect(tree).toMatchSnapshot();
});
