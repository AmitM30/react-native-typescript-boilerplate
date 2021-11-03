const base = '/api/v1';
const domain = 'somecompany.com';
const Defaults = {
  appName: 'FridayApp',
  domain,
  defaultLocale: {
    lang: 'en',
  },
  app: {
    platforms: ['ios', 'android'],
  },
  apis: {
    baseUrl: `https://api.${domain}`,
    public: {
      backend: `${base}`,
    },
    search: `${base}/search`,
    user: {
      base: `${base}`,
      login: `${base}/login`,
      logout: `${base}/logout`,
    },
  },
};

export default Defaults;
