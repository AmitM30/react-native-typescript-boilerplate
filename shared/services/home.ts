import API from './core/api';
import Config from './config';

export const HomeService = {
  loadCarouselData: (searchTerm: string) => {
    return API.get(
      Config.APIs.endpoints.baseAPI + Config.APIs.endpoints.search + encodeURI(searchTerm),
      { api_key: Config.APIs.api_key }
    )
    .then((res) => res.json())
    .catch((err) => {
      console.error('>>> err', err);
      return Promise.resolve({ data: null, error: err });
    });
  }
}