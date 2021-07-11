'use strict';

const master = require('../queue-with-stacks');
const Pseudo = master.queue;
const Node = master.node;


describe('Testing enqueue function', () => {
  it('Should add values to the pseudoqueue', () => {
    const pseudo = new Pseudo;
    pseudo.enqueue(new Node(1));
    pseudo.enqueue(new Node(2));
    expect(pseudo.rear.top.value).toEqual(2);
  });
});

describe('Testing dequeue function', () => {
  it('Should remove first value added to the pseudoqueue', () => {
    const pseudo = new Pseudo;
    pseudo.enqueue(new Node(1));
    pseudo.enqueue(new Node(2));
    pseudo.enqueue(new Node(3));
    pseudo.enqueue(new Node(4));
    expect(pseudo.dequeue()).toEqual(1);
  });
});