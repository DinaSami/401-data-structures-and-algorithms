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

  preOrderFunction() {
    const values = [];
    const preOrderFunction = (node) => {
      values.push(node.value);
      if (node.left) {
        preOrderFunction(node.left);
      }
      if (node.right) {
        preOrderFunction(node.right);
      }
    };

    let current = this.root;
    preOrderFunction(current);
    return values;
  }
}


function checkTreeIntersection(tree1, tree2) {

  let tree1Arr = tree1.preOrderFunction();
  let tree2Arr = tree2.preOrderFunction();
  let results = [];
  console.log(results);

  for (let i = 0; i < tree1Arr.length; i += 1) {

    if (tree1Arr[i] === tree2Arr[i]) {
      results[results.length] = tree1Arr[i];
    }
  }
  return results;
}


module.exports = {
  Tree,
  Node,
  checkTreeIntersection,
};