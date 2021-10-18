import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../../../../shared/redux/reducers';
import { addItemsToCart } from '../../../../shared/redux/thunk/cart';
import { CartItem, CartState } from '../../../../shared/redux/types/stores/cart';

import Component from './Component';

export interface Props {
  name: string;
  text: string;
  cart: CartState;
  componentId: string;
  addItemToCart: (data: CartItem) => (dispatch: Dispatch<any>) => Promise<void>
}

const mapStateToProps = (state: RootState) => ({
  cart: state.cart
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  addItemToCart: (params: CartItem) => dispatch(addItemsToCart(params))
});

const homeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default homeContainer;
