'use strict';

const linkedListMaster = require('../linked_list');

const linkedList = linkedListMaster.ll;
const Node = linkedListMaster.node;
const zip = linkedListMaster.zip;


describe('testing linked list instantiation', () => {
  it('should return a linked list', () => {
    const ll = new linkedList;
    expect(ll).toBeTruthy();
  });
});

describe('testing insert value function for linked list', () => {
  it('should return a linked list with a new node added', () => {
    const ll = new linkedList;
    ll.head = new Node(0);
    ll.head.next = new Node(1);
    ll.head.next.next = new Node(2);
    ll.head.next.next.next = new Node(3);
    ll.insert(4);
    expect(ll.head.value).toEqual(4);
  });
});

describe('testing linked list head points to first node in linked list', () => {
  it('should return a value equivalent to that of the first node in the linked list', () => {
    const ll = new linkedList;
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);

    expect(ll.head.value).toEqual(1);
  });
});

describe('testing ability to insert multiple nodes into list', () => {
  it('should return a linked list with multiple values', () => {
    const ll = new linkedList;
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    expect(ll.head.value).toEqual(1);
    expect(ll.head.next.value).toEqual(2);
    expect(ll.head.next.next.value).toEqual(3);
  });
});

describe('testing includes function for searching for a specific value in a linked list', () => {
  it('should return true if target value is present ', () => {
    const ll = new linkedList;
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    expect(ll.includes(3)).toBeTruthy();
  });
  it(`should return false if target value is not present`, () => {
    const ll = new linkedList;

    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    expect(ll.includes(3)).toBeTruthy();
    expect(ll.includes(6)).toEqual(false);
  });
});

describe('testing linked list toString function', () => {
  it('should a string of the values contained within a linked list', () => {
    const ll = new linkedList;
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    expect(ll.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });
});

describe('testing linked list append function', () => {
  it('should add a new node to the end of the linked list', () => {
    const ll = new linkedList;
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    ll.append(4);
    expect(ll.head.next.next.next.value).toEqual(4);
  });
  it('should add a multiple new nodes to the end of the linked list', () => {
    const ll = new linkedList;
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    ll.append(4);
    ll.append(5);
    expect(ll.head.next.next.next.value).toEqual(4);
    expect(ll.head.next.next.next.next.value).toEqual(5);
  });
});
describe('testing linked list insertBefore function', () => {
  it('should add a new node before a target value that is the first node of the list', () => {
    const ll = new linkedList;
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    ll.insertBefore(4, 1);
    expect(ll.head.value).toEqual(4);
  });
  it('should add a  new node before an existing node in the middle of the linked list', () => {
    const ll = new linkedList;
    ll.insert(4);
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    ll.insertBefore(7, 3);
    expect(ll.head.next.next.value).toEqual(7);
  });
});
describe('testing linked list insertAfter function', () => {
  it('should add a new node after a target value that is a middle node in the list', () => {
    const ll = new linkedList;
    ll.insert(4);
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    ll.insertAfter(5, 2);
    expect(ll.head.next.next.value).toEqual(5);
  });
  it('should add a new node before the last node of the linked list', () => {
    const ll = new linkedList;
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    ll.insertAfter(4, 3);
    expect(ll.head.next.next.next.value).toEqual(4);
  });

});
describe('testing linked list kthFromEnd function', () => {
  it('should return invalid input string if k is greater than the length of the list', () => {
    const ll = new linkedList;
    ll.insert(4);
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    expect(ll.kthFromEnd(5)).toEqual('Exception');
  });

  it('should return invalid input string if k is the length of the list because index starts at 0', () => {
    const ll = new linkedList;
    ll.insert(4);
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);

    expect(ll.kthFromEnd(4)).toEqual('Exception');
  });

  it('should return invalid input string if k is a negative number', () => {
    const ll = new linkedList;
    ll.insert(4);
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);

    expect(ll.kthFromEnd(-2)).toEqual('Exception');
  });

  it('should return the only value if the linked list has one node and k = 0', () => {
    const ll = new linkedList;
    ll.insert(1);

    expect(ll.kthFromEnd(0)).toEqual(1);
  });

  it('should find the value 2 places from the end if k = 2', () => {
    const ll = new linkedList;
    ll.insert(4);
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    expect(ll.kthFromEnd(2)).toEqual(2);
  });
});

describe('testing  zip function', () => {
  it('same size for two linked list ', () => {
    let linkedlistss = new linkedList;
    linkedlistss.insert(1);
    linkedlistss.append(2);
    linkedlistss.append(3);
    let linkedlisttt = new linkedList;
    linkedlisttt.insert(4);
    linkedlisttt.append(5);
    linkedlisttt.append(6);
    let ll = zip(linkedlistss, linkedlisttt);
    expect(ll.head.value).toEqual(1);
    expect(ll.head.next.value).toEqual(4);
    expect(ll.head.next.next.value).toEqual(2);
  });
  it('first linked list greater than second linked list ', () => {
    let linkedlistss = new linkedList;
    linkedlistss.insert(1);
    linkedlistss.append(2);
    linkedlistss.append(3);

    let linkedlisttt = new linkedList;
    linkedlisttt.insert(4);
    linkedlisttt.append(5);

    let ll = zip(linkedlistss, linkedlisttt);
    expect(ll.head.value).toEqual(1);
    expect(ll.head.next.value).toEqual(4);
    expect(ll.head.next.next.value).toEqual(2);
    expect(ll.head.next.next.next.value).toEqual(5);
    expect(ll.head.next.next.next.next.value).toEqual(3);
    expect(ll.head.next.next.next.next.next).toEqual(null);
  });
  it('second linked list is greater than first linked list ', () => {
    let linkedlistss = new linkedList;
    linkedlistss.insert(1);
    linkedlistss.append(2);
    let linkedlisttt = new linkedList;
    linkedlisttt.insert(4);
    linkedlisttt.append(5);
    linkedlistss.append(3);

    let ll = zip(linkedlistss, linkedlisttt);
    expect(ll.head.value).toEqual(1);
    expect(ll.head.next.value).toEqual(4);
    expect(ll.head.next.next.value).toEqual(2);
    expect(ll.head.next.next.next.value).toEqual(5);
    expect(ll.head.next.next.next.next.value).toEqual(3);
    expect(ll.head.next.next.next.next.next).toEqual(null);
  });
  it('second linked list is greater than first linked list ', () => {
    let linkedlistss = new linkedList;
    linkedlistss.insert('a');
    linkedlistss.append('b');
    let linkedlisttt = new linkedList;
    linkedlisttt.insert(4);
    linkedlisttt.append(5);
    linkedlistss.append(3);

    let ll = zip(linkedlistss, linkedlisttt);
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next.value).toEqual(4);
    expect(ll.head.next.next.value).toEqual('b');
    expect(ll.head.next.next.next.value).toEqual(5);
    expect(ll.head.next.next.next.next.value).toEqual(3);
    expect(ll.head.next.next.next.next.next).toEqual(null);
  });

});