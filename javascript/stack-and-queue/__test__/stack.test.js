const Stack = require('../stack')


describe('testing stack', () => {
  let stack;
  beforeEach(() => {
    stack1 = new Stack;
  });

  it('Can successfully push onto a stack', () => {
    stack1.push(2);
    expect(stack1.top.value).toEqual(2);
  });
  it('Can successfully push multiple values onto a stack', () => {
    stack1.push(2);
    stack1.push(3);
    stack1.push(1);
    expect(stack1.top.value).toEqual(1);
  });
  it('Can successfully pop off the stack', () => {
    stack1.push(2);
    stack1.push(3);
    stack1.push(1);
    stack1.pop();
    expect(stack1.top.value).toEqual(3);
  });
  it('Can successfully empty a stack after multiple pops', () => {
    stack1.push(2);
    stack1.push(3);
    stack1.push(1);
    stack1.pop();
    stack1.pop();
    stack1.pop();
    stack1.pop();
    expect(stack1.top).toBeFalsy();
  });
  it('Can successfully peek the next item on the stack', () => {
    stack1.push(2);
    stack1.push(3);
    stack1.push(1);

    expect(stack1.peek()).toEqual(stack1.top.value);
  });
  it('Can successfully instantiate an empty stack', () => {
    let stack2 = new Stack

    expect(stack2).toBeTruthy();
  });
  it('Calling pop or peek on empty stack raises exception', () => {
    let stack2 = new Stack

    expect(stack2.pop()).toEqual('exception');

    expect(stack2.peek()).toEqual('exception');
  });
});