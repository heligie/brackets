module.exports = function check(str, bracketsConfig) {
  const config = new Map(bracketsConfig);
  let brackets = [];

  for (const bracket of str) {
    bracket === config.get(brackets[brackets.length - 1]) ?
      brackets.pop() :
      brackets.push(bracket);
  }

  return !brackets.length;
}
