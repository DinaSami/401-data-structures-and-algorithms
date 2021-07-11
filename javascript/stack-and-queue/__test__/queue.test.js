const Queue = require('../queue')


describe('testing Queue', () => {
  let queue1;
  beforeEach(() => {
    queue1 = new Queue;
  });

  it('Can successfully enqueue into a queue', () => {
    queue1.enqueue(4);
    expect(queue1.front.value).toEqual(4);
  });
  it('Can successfully enqueue multiple values into a queue', () => {
    queue1.enqueue(4);
    queue1.enqueue(5);
    queue1.enqueue(6);
    queue1.enqueue(7);
    expect(queue1.front.value).toEqual(4);
    expect(queue1.back.value).toEqual(7);
  });
  it('Can successfully dequeue out of a queue the expected value', () => {
    queue1.enqueue(4);
    queue1.enqueue(5);
    queue1.enqueue(6);
    queue1.enqueue(7);
    queue1.dequeue();
    expect(queue1.front.value).toEqual(5);
  });
  it('an successfully empty a queue after multiple dequeues', () => {
    queue1.enqueue(2);
    queue1.enqueue(3);
    queue1.enqueue(1);
    queue1.dequeue();
    queue1.dequeue();
    queue1.dequeue();
    queue1.dequeue();
    expect(queue1.front).toBeFalsy();
  });
  it('Can successfully peek into a queue, seeing the expected value', () => {
    queue1.enqueue(2);
    queue1.enqueue(3);
    queue1.enqueue(1);

    expect(queue1.peek()).toEqual(queue1.front.value);
  });
  it('Can successfully instantiate an empty Queue', () => {
    let queue2 = new Queue

    expect(queue2).toBeTruthy();
  });
  it('Calling dequeue or peek on empty Queue raises exception', () => {
    let queue2 = new Queue

    expect(queue2.dequeue()).toEqual('exception');

    expect(queue2.peek()).toEqual('exception');
  });
});