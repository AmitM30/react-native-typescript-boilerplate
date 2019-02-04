/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import reactTestRenderer from 'react-test-renderer';

import * as App from '../src/navigators';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  reactTestRenderer.create(App());
});
