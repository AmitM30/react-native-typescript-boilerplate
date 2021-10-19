import API from './core/api';
import Config from './config';

import { SearchResponse } from '../redux/types/search/ISearchResponse';

export const SearchService = {
  fetch: (searchTerm: string): Promise<SearchResponse> => {
    return API.get(
      Config.APIs.endpoints.search + encodeURI(searchTerm),
      { api_key: Config.APIs.api_key }
    ).then((res) => res.json())
    .catch((err) => {
      console.error('>>> err:', err);
      return Promise.resolve({ error: err });
    });
  }
};
