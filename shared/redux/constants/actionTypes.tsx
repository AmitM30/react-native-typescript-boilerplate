/* Add All Action constants here  */

const ACTION_TYPES = {
  // Splash Screen Actions
  SPLASH: {
    SPLASH_LAUNCHED: 'SPLASH_LAUNCHED',
  },
  // Home Screen Actions
  HOME: {
    HOME_LAUNCHED: 'HOME_LAUNCHED',
    LOAD_BEST_SELLING: 'LOAD_BEST_SELLING',
  },
  // Cart Actions
  CART: {
    INIT_CART: 'INIT_CART',
    ADD_TO_CART: 'ADD_TO_CART',
    CART_VIEWED: 'CART_VIEWED',
  },
  // Search Actions
  SEARCH: {
    INIT_SEARCH: 'INIT_SEARCH',
    SEARCH_INITIATED: 'SEARCH_INITIATED',
    SEARCH_FAILED: 'SEARCH_FAILED',
  },
};

export { ACTION_TYPES };
