import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../../../../shared/redux/reducers';
import { addItemsToCart } from '../../../../shared/redux/thunk/cart';
import { CartItem } from '../../../../shared/redux/types/stores/cart';
import { detailsRequested } from '../../../../shared/redux/thunk/details';
import { ProductResponse } from '../../../../shared/redux/types/search/IProductResponse';

import Component from './Component';

export interface Props {
  componentId: string;
  getDetail: (productId: string) => (dispatch: Dispatch<any>) => Promise<ProductResponse>;
  addItemToCart: (data: CartItem) => (dispatch: Dispatch<any>, getState: () => RootState) => Promise<void>;
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  getDetail: (productId: string) => dispatch(detailsRequested(productId)),
  addItemToCart: (params: CartItem) => dispatch(addItemsToCart(params)),
});

const dummyContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default dummyContainer;
