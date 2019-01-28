/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import renderer from 'react-test-renderer';

import App from '../src/navigators';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  renderer.create(App());
});
