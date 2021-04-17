export const intersection = (a,b) => a.filter(x => !b.includes(x)).sort(function(a,b){return a>b});

export const convertArr = str => str.split("\n");