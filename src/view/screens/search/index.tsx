import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../../../shared/redux/reducers';

import { searchRequested } from '../../../../shared/redux/thunk/search';
import { RecentSearches } from '../../../../shared/redux/types/stores/search';
import { SearchResponse } from '../../../../shared/redux/types/search/ISearchResponse';

import Component from './Component';

export interface Props {
  componentId: string;
  recent: RecentSearches;
  search: (query: string) => (dispatch: Dispatch<any>) => Promise<SearchResponse>;
}

const mapStateToProps = (state: RootState) => ({
  recent: state.search
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  search: (query: string) => dispatch(searchRequested({ query }))
});

const searchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default searchContainer;
