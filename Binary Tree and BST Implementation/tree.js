'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  preOrder() {
    let array = [];
    const preOrderVar = (node) => {
      array.push(node.value);
      if (node.left) {
        preOrderVar(node.left);
      }
      if (node.right) {
        preOrderVar(node.right);
      }
    };

    let current = this.root;
    preOrderVar(current);
    return array;
  }
  postOrder() {
    let array = [];
    const postOrderVar = (node) => {
      if (node.left) {
        postOrderVar(node.left);
      }
      if (node.right) {
        postOrderVar(node.right);
      }
      array.push(node.value);
    };

    let current = this.root;
    postOrderVar(current);
    return array;
  }

  inOrder() {
    let array = [];
    const inOrderVar = (node) => {
      if (node.left) {
        inOrderVar(node.left);
      }
      array.push(node.value);
      if (node.right) {
        inOrderVar(node.right);
      }
    };

    let current = this.root;
    inOrderVar(current);
    return array;
  }
  getMax(){
    let maxVal = 0;
    const preOrderVar = (node) => {
      if(node.value > maxVal){
        maxVal = node.value;
      }
      if (node.left) {
        preOrderVar(node.left);
      }
      if (node.right) {
        preOrderVar(node.right);
      }
    };
    let current = this.root;
    preOrderVar(current);
    return maxVal;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  add(value) {
    let node = new Node(value);
    let current = this.root;
    const helper = (current) => {
      if(current.value > value && current.left === null){
        node.left = current.left;
        node.right = current.right;
        current.left = node;
      }
      if(current.value > value){
        helper(current.left);
      }if(current.value < value && current.right !== null){
        node.left = current.left;
        node.right = current.right;
        current.right = node;
      }if(current.value < value){
        helper(current.right);
      }
    };
    helper(current);
  }
  contains(value) {
    let current = this.root;
    while(current !== null && current.value !== value){
      if(value < current.value){
        current = current.left;
      }else if(value > current.value){
        current = current.right;
      }
    }
    if(!current){
      return false;
    }else{
      return true;
    }
  }
}


module.exports= {
  tree: Tree,
  bst: BinarySearchTree,
  node: Node
};