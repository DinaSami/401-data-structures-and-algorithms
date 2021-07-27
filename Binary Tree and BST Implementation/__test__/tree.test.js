'use strict';

const TreeMaster = require('../tree.js');

const Tree = TreeMaster.tree;
const BinarySearchTree = TreeMaster.bst;
const Node = TreeMaster.node;


describe('testing Tree Class ', () => {
  it('creating new Tree', () => {
    const tree = new Tree;
    expect(tree).toBeTruthy();
  });
  it('creating new Tree with node', () => {
    const tree = new Tree;
    tree.root = new Node(5);
    expect(tree.root.value).toEqual(5);
  });
  it('assignning left and right', () => {
    const tree = new Tree;
    tree.root = new Node(5);
    tree.root.left = new Node(3);
    tree.root.right = new Node(8);
    expect(tree.root.left.value).toEqual(3);
    expect(tree.root.right.value).toEqual(8);
  });
  it('preorder method', () => {
    const tree = new Tree();

    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right = new Node('C');
    tree.root.right.left = new Node('F');
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual([ 'A', 'B', 'D', 'E', 'C', 'F' ]);
  });
  it('postorder method', () => {
    const tree = new Tree();

    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right = new Node('C');
    tree.root.right.left = new Node('F');
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual([ 'D', 'E', 'B', 'F', 'C', 'A' ]);
  });
  it('order method', () => {
    const tree = new Tree();

    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right = new Node('C');
    tree.root.right.left = new Node('F');
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual([ 'D', 'B', 'E', 'A', 'F', 'C' ]);
  });
  it('get max value', () => {
    const tree = new Tree();

    tree.root = new Node('1');
    tree.root.left = new Node('2');
    tree.root.left.left = new Node('3');
    tree.root.left.right = new Node('4');
    tree.root.right = new Node('5');
    tree.root.right.left = new Node('6');
    let getMax = tree.getMax();
    expect(getMax).toEqual("6");
  });
  it('tree contains alphabets', () => {
    const tree = new Tree();
    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('C');
    tree.root.left.right = new Node('D');
    tree.root.right = new Node('E');
    tree.root.right.left = new Node('F');
    let getMax = tree.getMax();
    expect(getMax).toBeFalsy();
  });
  it('tree-breadth-first method', () => {
    const tree = new Tree();
    tree.root = new Node(2);
    tree.root.left = new Node(7);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    tree.root.right = new Node(5);
    tree.root.right.right = new Node(9);
    tree.root.right.right.left = new Node(4);
    let breadthFirst = tree.breadthFirst();
    expect(breadthFirst).toEqual([2,7,5,2,6,9,5,11,4]);
  });
  it('fizzBuzz method', () => {
    const tree = new Tree();
    tree.root = new Node(2);
    tree.root.left = new Node(7);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    tree.root.right = new Node(5);
    tree.root.right.right = new Node(9);
    tree.root.right.right.left = new Node(15);
    let fizzBuzz = tree.fizzBuzz(tree);
    let qqq= fizzBuzz.breadthFirst() 
    expect(qqq).toEqual(['2','7','Buzz','2','Fizz','Fizz','Buzz','11','FizzBuzz']);
  });
});