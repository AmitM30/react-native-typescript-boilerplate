import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../../../../shared/redux/reducers';
import { addItemsToCart } from '../../../../shared/redux/thunk/cart';
import { loadBestSelling } from '../../../../shared/redux/thunk/home';
import { CartItem, CartState } from '../../../../shared/redux/types/stores/cart';
import { SearchResponse } from '../../../../shared/redux/types/search/ISearchResponse';

import Component from './Component';

export interface Props {
  name: string;
  text: string;
  cart: CartState;
  componentId: string;
  addItemToCart: (data: CartItem) => (dispatch: Dispatch<any>, getState: () => RootState) => Promise<void>;
  loadBestSelling: () => (dispatch: Dispatch<any>, getState: () => RootState) => Promise<SearchResponse>;
}

const mapStateToProps = (state: RootState) => ({
  cart: state.cart
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): Partial<Props> => ({
  addItemToCart: (params: CartItem) => dispatch(addItemsToCart(params)),
  loadBestSelling: () => dispatch(loadBestSelling())
});

const homeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default homeContainer;
