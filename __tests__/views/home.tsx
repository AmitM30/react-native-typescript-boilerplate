import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import Home from '../../src/view/screens/home';
// Note: test renderer must be required after react-native.

it('renders correctly with defaults', () => {
  const tree = renderer.create(<Home name="Amit" />).toJSON();
  expect(tree).toMatchSnapshot();
});
