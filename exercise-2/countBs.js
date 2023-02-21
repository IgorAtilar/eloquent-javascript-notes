const countChar = require('./countChar.js');

function countBs(string = '') {
  return string.match(/B/g).length;
}

const newCountBs = (string) => countChar(string, 'B');
