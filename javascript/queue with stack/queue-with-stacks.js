'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  push(node){
    if(!this.top){
      this.top = node;
      return;
    }else{
      node.next = this.top;
      this.top = node;
      return;
    }
  }

  pop(){
    if(!this.top){
      return 'Stack is Empty';
    }
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp;
  }

  peek(){
    if(this.top){
      return this.top.value;
    }
    return ('Stack is Empty');
  }
}

class PseudoQueue{
  constructor(){
    this.front = new Stack();
    this.rear = new Stack();
  }
  enqueue(value){
    this.rear.push(value);
    return this;
  }


  dequeue(){
    while(this.rear.top){
      let temp = this.rear.pop();
      this.front.push(temp);
    }
    let final = this.front.pop();
    while(this.front.top){
      let temp = this.front.pop();
      this.rear.push(temp);
    }
    return final.value;
  }
}

module.exports = {
  queue: PseudoQueue,
  node: Node};