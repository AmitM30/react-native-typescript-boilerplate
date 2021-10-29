import API from './core/api';
import Config from '../../src/config';

import searchResult from '../mock/amazon/search';
import { CartState } from '../redux/types/stores/cart';
import { SearchResponse } from '../redux/types/search/ISearchResponse';

export const CartService = {
  fetch: (cart: CartState): Promise<SearchResponse> => {
    /**
     * Make call to some API that return data for cart page
     * Mocking it here with search response
     */
    return new Promise((resolve) => {
      window.setTimeout(() => resolve({ results: searchResult.results.slice(0, cart.items.length) }), 1000);
    });
  },
};
