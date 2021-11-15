const expect = require('chai').expect;
const TripsRepo = require('../src/Trips.js');
const Traveler = require('../src/Traveler.js');
import trips from './test-data.js';

describe('Trips', () => {
  let tripsData;
  let traveler;

  beforeEach(function() {
    tripsData = new TripsRepo(trips)
    traveler = new Traveler({
      id: 1,
      name: "Ham Leadbeater",
      travelerType: "relaxer"
    });
  });

  it.skip('should be a function', function() {
    expect(TripsRepo).to.be.a('function');
  });

  it.skip('should be an instance of Trips', function() {
    expect(tripsData).to.be.an.instanceOf(TripsRepo);
  });

  it.skip('should contain all the data passed into it', function() {
    expect(tripsData.data.length).to.equal(10);
  });

  it.skip('should match all trips to the proper traveler by id', function() {
    expect(tripsData.retrieveTravelerTrips(1)).to.deep.equal(traveler.trips);
  });
});
