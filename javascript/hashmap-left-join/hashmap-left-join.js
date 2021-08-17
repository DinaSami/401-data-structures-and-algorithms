'use strict';

function leftJoin(hash1, hash2){
  for(let i = 0; i < hash1.length; i++){
    let keyOne = Object.keys(hash1[i][0])[0];
    let temp = {value: hash1[i][0][keyOne]};
    for(let j =0; j < hash2.length; j++){
      let keyTwo = Object.keys(hash2[j][0])[0];
      if(keyTwo === keyOne){
        hash1[i][0][keyOne] = [...hash1[i][0][keyOne], hash2[j][0][keyTwo][0]];
        temp.value = 'true';
      }
    }
    if(temp.value !== 'true'){
      hash1[i][0][keyOne] = [...hash1[i][0][keyOne], null];
    }
  }
  return hash1;
}


module.exports = leftJoin;