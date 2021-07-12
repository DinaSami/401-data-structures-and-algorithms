'use strict';

class AnimalShelter{
  constructor(){
    this.db = [];
  }

  enqueue(obj){
    this.db.push(obj);
  }

  dequeue(pref){
    if(pref !== 'dog' && pref !== 'cat'){
      return null;
    }else{
      let i = 0;
      while(Object.keys(this.db[i])[0] !== pref && i < this.db.length){
        i++;
      }
      let final = this.db[i];
      this.db.splice(i, 1);
      return final;
    }
  }
}

module.exports = AnimalShelter;