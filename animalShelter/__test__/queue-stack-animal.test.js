'use strict';

const AnimalShelter = require('../queue-stack-animal');


//Happy Path
describe('Testing functions of Animal Shelter class', () => {
  it('add values to the Animal Shelter', () => {
    const shelter = new AnimalShelter;
    shelter.enqueue({cat: 'miro'});
    shelter.enqueue({dog: 'rix'});
    shelter.enqueue({cat: 'mishmish'});
    shelter.enqueue({dog: 'fluffy'});
    expect(shelter.db[0]).toEqual({cat: 'miro'});
  });
  it('removes the oldest value from cats', () => {
    const shelter = new AnimalShelter;
    shelter.enqueue({cat: 'miro'});
    shelter.enqueue({dog: 'rix'});
    shelter.enqueue({cat: 'mishmish'});
    shelter.enqueue({dog: 'fluffy'});
    expect(shelter.dequeue('cat')).toEqual({cat: 'miro'});
  });
  it('removes the oldest value from dogs', () => {
    const shelter = new AnimalShelter;
    shelter.enqueue({cat: 'miro'});
    shelter.enqueue({dog: 'rix'});
    shelter.enqueue({cat: 'mishmish'});
    shelter.enqueue({dog: 'fluffy'});
    expect(shelter.dequeue('dog')).toEqual({dog: 'rix'});
  });
  it('enter neither dog nor cat', () => {
    const shelter = new AnimalShelter;
    shelter.enqueue({cat: 'miro'});
    shelter.enqueue({dog: 'rix'});
    shelter.enqueue({cat: 'mishmish'});
    shelter.enqueue({dog: 'fluffy'});
    expect(shelter.enqueue('fish')).toBeFalsy();
  });
  it('returns null if no pref existed', () => {
    const shelter = new AnimalShelter;
    shelter.enqueue({cat: 'miro'});
    shelter.enqueue({dog: 'rix'});
    shelter.enqueue({cat: 'mishmish'});
    shelter.enqueue({dog: 'fluffy'});
    expect(shelter.dequeue()).toEqual(null);
  });
});