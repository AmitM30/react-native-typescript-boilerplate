import { connect } from 'react-redux';

import Component from './Component';
import {
  splashScreenLaunched,
} from '../../../../shared/redux/thunk/app';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: any) => ({
  splashLaunched: () => dispatch(splashScreenLaunched()),
});

const splashContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default splashContainer;
