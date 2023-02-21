function countChar(string = '', char = '') {
  const charRegex = new RegExp(char, 'g');
  return string.match(charRegex).length;
}

module.exports = countChar;
