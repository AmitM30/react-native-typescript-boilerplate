import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import Component from './Component';
import { cartViewed } from '../../../../shared/redux/thunk/cart';
import { SearchResponse } from '../../../../shared/redux/types/search/ISearchResponse';

export interface Props {
  componentId: string;
  cartViewed: () => (dispatch: Dispatch<any>) => Promise<SearchResponse>;
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  cartViewed: () => dispatch(cartViewed())
});

const cartContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default cartContainer;
