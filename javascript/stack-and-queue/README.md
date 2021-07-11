# Stacks and Queues

+ Code Challenges 10


## Challenge

we have to create a Node class that has properties for the value stored in the Node, and a pointer to the next node, and create a Stack class that has a top property. It creates an empty Stack when instantiated with dealing with some methode like : push,pop,peek and is empty.
And create a Queue class that has a front property. It creates an empty Queue when instantiated with dealing with enqueue,dequeue,peek and is empty.

## Approach & Efficiency

I took the approach of minimizing big O space/time by keeping my functions simplistic and focused on only what was necessary to complete the task.
I add a new node with that value to the back of the queue with an O(1) Time performance.

## API

### Stack 

- .push();
 - adds a new node with that value to the top of the stack 

 - .pop();
 - Removes the node from the top of the stack

 - .peek();
 - Returns Value of the node located at the top of the stack

 - .is empty();
 - Returns Boolean indicating whether or not the stack is empty

 ### Queue

- .enqueue();
 - adds a new node with that value to the back of the queue

