import api from './core/api';
import config from '../../src/config';

export const HomeService = {
  loadData: (searchTerm: string) => {
    return api.get(config.apis.search + encodeURI(searchTerm)).then(res => res.json())
      .catch(err => Promise.resolve({ error: err }));
  },
};
