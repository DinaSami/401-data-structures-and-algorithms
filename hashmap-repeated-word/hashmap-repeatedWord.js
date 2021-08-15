'use strict';

function repeatedWord (paragraph){
  const words = paragraph.split(/[\s,]+/);

  let resultArr = [];

  for (let i=0; i<words.length; i++){
    let toLowerCase = words[i].toLowerCase();

    const contains = resultArr.includes(toLowerCase);

    if(contains) {
      return toLowerCase;
    }

    resultArr.push(toLowerCase);
  }
  return 'Duplicated!!';
}

module.exports = repeatedWord;