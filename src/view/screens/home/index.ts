import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import Component from './Component';
import { RootState } from '../../../../shared/redux/reducers';
import { loadHome } from '../../../../shared/redux/thunk/home';

export interface Props {
  name: string;
  componentId: string;
  loadHome: () => (dispatch: Dispatch<any>, getState: () => RootState) => Promise<void>;
}

const mapStateToProps = (state: RootState) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): Partial<Props> => ({
  loadHome: () => dispatch(loadHome()),
});

const homeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default homeContainer;
