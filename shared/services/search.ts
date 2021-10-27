import API from './core/api';
import Config from '../../src/config';

import searchResult from '../mock/amazon/search';
import productResult from '../mock/amazon/product';
import { SearchResponse } from '../redux/types/search/ISearchResponse';
import { ProductResponse } from '../redux/types/search/IProductResponse';

export const SearchService = {
  fetch: (searchTerm: string): Promise<SearchResponse> => {
    return API.get(
      Config.APIs.endpoints.search + encodeURI(searchTerm),
      { api_key: Config.APIs.api_key }
    ).then((res) => res.json())
    .catch((err) => {
      console.log('>>> err:', err);
      return Promise.resolve({ error: err });
    });
  },
  product: (productId: string): Promise<ProductResponse> => {
    return API.get(
      Config.APIs.endpoints.product + encodeURI(productId),
      { api_key: Config.APIs.api_key }
    ).then((res) => res.json())
    .catch((err) => {
      console.log('>>> err:', err);
      return Promise.resolve({ error: err });
    });
  }
};
