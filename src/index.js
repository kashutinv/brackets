module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 == 1) {
    return false;
  }

  let openBrackets = [];
  let closedBrackets = [];

  for (bracketsSet of bracketsConfig) {
    openBrackets.push(bracketsSet[0]);
    closedBrackets.push(bracketsSet[1]);
  }

  let brackets = str.split("");
  let removed = false;
  
  while (brackets.length > 0) {
    for (let open = 0, closed = 1; closed < brackets.length ; open++, closed++) {
      if ( openBrackets.indexOf(brackets[open]) === closedBrackets.indexOf(brackets[closed]) && openBrackets.indexOf(brackets[open]) !== -1) {
        brackets.splice(open, 2);
        removed = true;
        break;
      }
    }

    if (removed) {
      removed = false;
      continue;
    }

    return false;
  }

  return true
}
