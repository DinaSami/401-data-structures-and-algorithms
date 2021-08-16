let validateBracketse = require('../stack-queue-brackets');

describe('testing balanced brackets', () => {
  it('return true', () => {
    expect(validateBracketse('{}')).toBeTruthy();
    expect(validateBracketse('{}(){}')).toBeTruthy();
    expect(validateBracketse('()[[Extra Characters]]')).toBeTruthy();
    expect(validateBracketse('(){}[[]]')).toBeTruthy();
  });

  it('return true', () => {
    expect(validateBracketse('[({}]')).toBeFalsy();
    expect(validateBracketse('[}')).toBeFalsy();
    expect(validateBracketse('{(})')).toBeFalsy();
  });
});