'use strict';

class Node {
  constructor(value,next=null) {
    this.value = value;
    this.next = next;

  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    if (!value) {
      throw new Error('NO THING');
    }
    // this.head = new Node(value, this.head);
    // this.size = this.size + 1;
    let node = new Node(value);
    node.next = this.head;
    this.head=node;
    this.size = this.size + 1;
  }

  includes(value) {
    let current = this.head;
    if (!value) {
      throw new Error('Improper value passed as argument');
    }
    if (!current) {
      throw new Error('Linked List invalid');
    }
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    if (!current) {
      throw new Error('Linked List invalid');
    }
    let finalStr = '';
    while (current) {
      finalStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    return finalStr += 'NULL';
  }
  append(value) {
    let current = this.head;
    if (!current) {
      this.head = new Node(value);
      this.size = this.size + 1;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
      this.size = this.size + 1;
    }
  }
  insertBefore(value, targetValue) {
    let current = this.head;
    if (current.value === targetValue) {
      this.insert(value);
    } else {
      while (current.next.value !== targetValue) {
        current = current.next;
      }
      let temp = new Node(value);
      temp.next = current.next;
      current.next = temp;
      this.size = this.size + 1;
    }
  }
  insertAfter(value, targetValue) {
    let current = this.head;
    while (current.value !== targetValue) {
      current = current.next;
    }
    let temp = new Node(value);
    temp.next = current.next;
    current.next = temp;
    this.size = this.size + 1;
  }
  kthFromEnd(k) {
    let currentNode = this.head;
    let count = this.size - 1;
    while (currentNode) {
      if (k === count) {
        return currentNode.value;
      }
      count--;
      currentNode = currentNode.next;
    }
    return 'Exception';
  }

}


let linkedlistss = new LinkedList;
linkedlistss.insert(1);
linkedlistss.append(2);
linkedlistss.append(3);
linkedlistss.append(4);

console.log(linkedlistss)
let linkedlisttt = new LinkedList;
linkedlisttt.insert(4);
linkedlisttt.append(5);


function zip(linkedlist1, linkedlist2) {
  console.log("hooohoo", linkedlist1);
  console.log("heeheee", linkedlist2);
  let current = linkedlist1.head;
  let current2 = linkedlist2.head;

  let arr = [];
  let llf = new LinkedList
  let count1 = (linkedlist1.size)
  let count2 = (linkedlist2.size)
  let count;


  if (count1 < count2) {
    count = count2
  } else {
    count = count1
  }

  while (count) {
    count--

    if (count1 > count2 && current2 === null) {
      arr.push(current.value)
      current = current.next

    } else if (count2 > count1 && current === null) {
      arr.push(current2.value);
      current2 = current2.next
      console.log("d");
    }
    else {
      arr.push(current.value);
      current = current.next

      arr.push(current2.value)
      current2 = current2.next
    }
  }

  arr.map((ele, idx) => {

    llf.append(ele)

  })

  return llf;
}


module.exports = {
  ll: LinkedList,
  node: Node,
  zip
};


