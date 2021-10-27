import Config from '../../../src/config';
import { jsonToQueryString } from '../utilities/lib';

const defaultHeaders = () => {
  return {
    Accept: 'application/json',
    'x-rapidapi-host': Config.APIs.host,
    'x-rapidapi-key': Config.APIs.token,
    'Content-Type': 'application/json',
  };
}

const API = {
  get: (endpoint: string, queryParam: any) => {
    return fetch(endpoint + jsonToQueryString(queryParam), {
      method: 'GET',
      headers: defaultHeaders()
    });
  },
  post: (endpoint: string, params: any) => {
    return fetch(endpoint, {
      method: 'POST',
      headers: defaultHeaders(),
      body: JSON.stringify(params)
    });
  }
}

export default API;
