const expect = require('chai').expect;
const TripsRepo = require('../src/Trips.js');
const Traveler = require('../src/Traveler.js');
import {tripsData} from './test-data.js';

describe('Trips', () => {
  let tripsInfo;
  let traveler;

  beforeEach(function() {
    tripsInfo = new TripsRepo(tripsData)
    traveler = new Traveler({
      id: 1,
      name: "Ham Leadbeater",
      travelerType: "relaxer"
    });
  });

  it('should be a function', function() {
    expect(TripsRepo).to.be.a('function');
  });

  it('should be an instance of Trips', function() {
    expect(tripsInfo).to.be.an.instanceOf(TripsRepo);
  });

  it('should contain all the data passed into it', function() {
    expect(tripsInfo.data.length).to.equal(10);
  });

  it('should match all trips to the proper traveler by id', function() {

    traveler.findTrips(tripsData);
    
    expect(tripsInfo.retrieveTravelerTrips(1)).to.deep.equal(traveler.trips);
  });
});
