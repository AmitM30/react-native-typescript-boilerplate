const base = '/api/v1';
const domain = 'somecompany.com';
const DEFAULTS = {
  domain,
  appName: 'FridayApp',
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

export default DEFAULTS;
