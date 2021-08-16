function validateBracketse(str) {
    let bracket = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
    let arr = [];
    for (char of str) {
      if (bracket[char]) {
        // console.log(bracket[char])
        arr.push(bracket[char])
        // console.log(arr)
        // console.log('if',char)
  
      } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char === ' ')) {
        // console.log('else if',char)
        // continue;
      }
       else {
        if (arr.pop() != char) {
          // console.log('hihi',char)
          return false;
        }
      }
    }
    return (!arr.length)
  }
  module.exports=validateBracketse;