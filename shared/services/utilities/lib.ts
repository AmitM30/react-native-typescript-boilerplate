export const jsonToQueryString = function (params: any) {
  const keys = Object.keys(params).map(key => `${key}'='${params[key].join('&')}`);
  return `?${keys}`;
};
