export const serialize = (params: any) => {
  var str = [];

  for (var p in params) {
    str.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]));
  }

  return str.join('&');
};
