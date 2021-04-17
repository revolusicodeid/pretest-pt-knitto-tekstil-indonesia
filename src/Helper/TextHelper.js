export const titleFormat = (str) => str.toLowerCase().replace(/(^|\s)[0-9]+/g, function(x){ return ""; }).replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); }).trim();

export const wordFormat = (str) => str.toLowerCase().replace(/(^|\s)([a-z]|[0-9])/, function(x){ return x.toUpperCase(); }).trim();