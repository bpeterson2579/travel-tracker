const expect = require('chai').expect;
const TravelersRepo = require('../src/TravelersRepo.js');
import {travelers} from './test-data.js';

describe('TravelersRepo', () => {
  let travelersData;

  beforeEach(function() {
    travelersData = new TravelersRepo(travelers);
  });

  it('should be a function', function() {
    expect(TravelersRepo).to.be.a('function');
  });

  it('should be an instance of Travelers Repo', function() {
    expect(travelersData).to.be.an.instanceOf(TravelersRepo);
  });

  it('should contain all the data given', function() {
    expect(travelersData.data.length).to.equal(50);
  });

  it('should retrieve an individual traveler\s data by id', function() {
    expect(travelersData.retrieveUserData(1)).to.deep.equal(travelers[0]);
    expect(travelersData.retrieveUserData(10)).to.deep.equal(travelers[9]);
  });

  it('should return undefined if there is no data for an individual', function() {
    expect(travelersData.retrieveUserData(51)).to.equal(undefined);
  });
});
