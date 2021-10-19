import API from './core/api';
import Config from './config';

export const loadCarouselData = (searchTerm: string) => {
  return API.get(
    Config.APIs.endpoints.search + encodeURI(searchTerm),
    { api_key: Config.APIs.api_key },
  );
};
