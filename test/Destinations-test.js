const expect = require('chai').expect;
const Destinations = require('../src/Destinations.js');
import {tripsData} from './test-data.js';

describe('Destinations', () => {
  let destinations;

  beforeEach(function() {
    destinations = new Destinations(tripsData);
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

})
