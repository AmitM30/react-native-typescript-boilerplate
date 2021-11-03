import config from '../../../src/config';
import { jsonToQueryString } from '../utilities/lib';

const defaultHeaders = () => {
  return {
    Accept: 'application/json',
    'x-host': config.apis.baseUrl,
    'Content-Type': 'application/json',
  };
};

const API = {
  get: (endpoint: string, queryParam?: any) => {
    return fetch(endpoint + jsonToQueryString(queryParam), {
      method: 'GET',
      headers: defaultHeaders(),
    });
  },
  post: (endpoint: string, params: any) => {
    return fetch(endpoint, {
      method: 'POST',
      headers: defaultHeaders(),
      body: JSON.stringify(params),
    });
  },
};

export default API;
