const expect = require('chai').expect;
const TravelersRepo = require('../src/TravelersRepo.js');
import travelers from './test-data.js';

describe('TravelersRepo', () => {
  let travelersData;

  beforeEach(function() {
    travelersData = new TravelersRepo(travelers);
  });

  it.skip('should be a function', function() {
    expect(TravelersRepo).to.be.a('function');
  });

  it.skip('should be an instance of Travelers Repo', function() {
    expect(travelersData).to.be.an.instanceOf(TravelersRepo);
  });

  it.skip('should contain all the data given', function() {
    expect(travelersData.data.length).to.equal(50);
  });

  it.skip('should retrieve an individual traveler\s data by id', function() {
    expect(travelersData.retrieveUserData(1)).to.deep.equal(travelers[1]);
    expect(travelersData.retrieveUserData(10)).to.deep.equal(travelers[10]);
  });

  it.skip('should return undefined if there is no data for an individual', function() {
    expect(travelersData.retrieveUserData(51)).to.equal(undefined);
  });
});
