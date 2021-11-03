import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import Component from './Component';
import { RootState } from '../../../../shared/redux/reducers';
import { splashScreenLaunched } from '../../../../shared/redux/thunk/app';

export interface Props {
  splashLaunched: () => (dispatch: Dispatch<any>, getState: () => RootState) => void;
}

const mapStateToProps = (state: RootState) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): Partial<Props> => ({
  splashLaunched: () => dispatch(splashScreenLaunched()),
});

const splashContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default splashContainer;
