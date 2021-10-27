import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { detailsRequested } from '../../../../shared/redux/thunk/details';
import { ProductResponse } from '../../../../shared/redux/types/search/IProductResponse';

import Component from './Component';

export interface Props {
  componentId: string;
  getDetail: (productId: string) => (dispatch: Dispatch<any>) => Promise<ProductResponse>;
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  getDetail: (productId: string) => dispatch(detailsRequested(productId))
});

const dummyContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default dummyContainer;
