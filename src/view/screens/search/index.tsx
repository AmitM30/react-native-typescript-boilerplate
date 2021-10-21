import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { searchRequested } from '../../../../shared/redux/thunk/search';
import { SearchResponse } from '../../../../shared/redux/types/search/ISearchResponse';

import Component from './Component';

export interface Props {
  componentId: string;
  search: (query: string) => (dispatch: Dispatch<any>) => Promise<SearchResponse>
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  search: (query: string) => dispatch(searchRequested({ query }))
});

const searchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default searchContainer;
