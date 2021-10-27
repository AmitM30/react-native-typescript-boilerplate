const domain = 'somecompany.com';
const baseAPI = 'https://amazon-data-scraper15.p.rapidapi.com';

const Defaults = {
  appName: 'FridayApp',
  domain,
  locale: {
    default: {
      lang: 'en'
    }
  },
  app: {
    platforms: ['ios', 'android']
  },
  APIs: {
    host: 'amazon-data-scraper15.p.rapidapi.com',
    token: '9060639b0cmsh3e48cc5ea6c1685p11bebejsn5ce7c058be49',
    api_key: '55d4588fcd6ce77b428b73d97f714195',
    endpoints: {
      search: `${baseAPI}/search/`,
      product: `${baseAPI}/products/`,
    }
  },
  Keys: {
    cart: 'cart',
    recentSearches: 'recentSearches',
  }
};

export default Defaults;
