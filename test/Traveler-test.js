const expect = require('chai').expect;
const Traveler = require('../src/Traveler.js');

describe('Traveler', () => {
  let traveler1;
  let traveler2;

  beforeEach(function() {
    traveler1 = new Traveler({
      id: 1,
      name: "Ham Leadbeater",
      travelerType: "relaxer"
    });

    traveler2 = new Traveler({
      id: 2,
      name: "Rachael Vaughten",
      travelerType: "thrill-seeker"
    });
  });

  it('should be a function', function() {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', function() {
    expect(traveler1).to.be.an.instanceOf(Traveler);
  });

  it('should store a traveler\'s id', function() {
    expect(traveler1.id).to.equal(1);
    expect(traveler2.id).to.equal(2);
  });

  it('should store the traveler\'s name', function() {
    expect(traveler1.name).to.equal('Ham Leadbeater');
    expect(traveler2.name).to.equal('Rachael Vaughten');
  });

  it('should the type of traveler the user is', function() {
    expect(traveler1.travelerType).to.equal('relaxer');
    expect(traveler2.travelerType).to.equal('thrill-seeker');
  });
})
