import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import Component from './Component';
import { RootState } from '../../../../shared/redux/reducers';

const mapStateToProps = (state: RootState) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({});

const drawerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default drawerContainer;
