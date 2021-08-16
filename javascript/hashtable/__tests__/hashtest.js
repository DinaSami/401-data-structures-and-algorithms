'use strict';


let Hashtable = require('../hashtable');
let hashTest = new Hashtable(1024);


describe('Hashtable tests', () => {

  test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    hashTest.add('key', 'value');
    expect(hashTest.contains('key')).toEqual(true);

  });


  test('Retrieving based on a key returns the value stored', () => {
    expect(hashTest.get('key')).toStrictEqual('value');
  });


  test('returns null for a key that does not exist in the hashtable', () => {
    expect(hashTest.contains('non existent key')).toStrictEqual(false);
  });


  test('handle a collision within the hashtable', () => {
    expect(hashTest.add('key', 'another key')).toStrictEqual(undefined);
  });


  test('retrieve a value from a bucket within the hashtable that has a collision', () => {
    expect(hashTest.get('key')).toEqual('value');
  });


  test('hash a key to value', () => {
    expect(hashTest.hash('hashed key')).toBeLessThanOrEqual(1024);
  });

});