const expect = require('chai').expect;
const Destinations = require('../src/Destinations.js');
const Traveler = require('../src/Traveler.js');
import {tripsData} from './test-data.js';

describe('Destinations', () => {
  let destinations;
  let traveler;

  beforeEach(function() {
    destinations = new Destinations(tripsData);
    traveler = new Traveler({
      id: 1,
      name: "Ham Leadbeater",
      travelerType: "relaxer"
    });
  });

  it('should be a function', function() {
    expect(Destinations).to.be.a('function');
  });

  it('should be an instance of Destinations', function() {
    expect(destinations).to.be.an.instanceOf(Destinations);
  });

  it('should contain all the data passed into it', function() {
    expect(destinations.data.length).to.equal(10);
  });

  it('should match all destinations to the proper traveler by id', function() {

    expect(destinations.retrieveTravelerDestinations(1)).to.deep.equal([{
      id: 1,
      userID: 1,
      destinationID: 1,
      travelers: 1,
      date: '2021/09/16',
      duration: 8,
      status: 'approved',
      suggestedActivities: []
    }]);
  });
});
