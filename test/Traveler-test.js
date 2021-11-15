const expect = require('chai').expect;
const Traveler = require('../src/Traveler.js');
import {tripsData, destinationsData} from './test-data';

describe('Traveler', () => {
  let traveler1;
  let traveler2;
  let trips;
  let destinations;

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

    trips = tripsData;
    destinations = destinationsData;
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

  it('should start with an empty array of trips taken', function() {
    expect(traveler1.trips).to.deep.equal([]);
    expect(traveler2.trips).to.deep.equal([]);
  });

  it('should grab trips that match the traveler\s id', function() {

    traveler1.findTrips(trips);

    expect(traveler1.trips).to.deep.equal([
      {
        id: 1,
        userID: 1,
        destinationID: 1,
        travelers: 1,
        date: '2022/09/16',
        duration: 8,
        status: 'approved',
        suggestedActivities: []
      },
      {
        id: 4,
        userID: 1,
        destinationID: 4,
        travelers: 2,
        date: '2022/02/25',
        duration: 10,
        status: 'approved',
        suggestedActivities: []
      },
      {
        id: 7,
        userID: 1,
        destinationID: 7,
        travelers: 5,
        date: '2022/5/28',
        duration: 20,
        status: 'approved',
        suggestedActivities: []
      },
      {
        id: 10,
        userID: 1,
        destinationID: 10,
        travelers: 6,
        date: '2022/07/23',
        duration: 17,
        status: 'approved',
        suggestedActivities: []
      }
    ]);
  })

  it('should grab destinations that match the trip\s destinationID', function() {

    traveler1.findTrips(trips);
    traveler1.findDestinations(destinations);

    expect(traveler1.destinations).to.deep.equal([
      {
        id: 1,
        destination: "Lima, Peru",
        estimatedLodgingCostPerDay: 70,
        estimatedFlightCostPerPerson: 400,
        image: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        alt: "overview of city buildings with a clear sky"
      },
      {
        id: 4,
        destination: "Cartagena, Colombia",
        estimatedLodgingCostPerDay: 65,
        estimatedFlightCostPerPerson: 350,
        image: "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        alt: "boats at a dock during the day time"
      },
      {
        id: 7,
        destination: "Paris, France",
        estimatedLodgingCostPerDay: 100,
        estimatedFlightCostPerPerson: 395,
        image: "https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
        alt: "city during the day time with eiffel tower"
      },
      {
        id: 10,
        destination: "Toronto, Canada",
        estimatedLodgingCostPerDay: 90,
        estimatedFlightCostPerPerson: 450,
        image: "https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80"
      }
    ]);
  });

  it('should start with 0 for the total cost of all trips', function() {
    expect(traveler1.totalTripsCost).to.equal(0);
    expect(traveler2.totalTripsCost).to.equal(0);
  });

  it('should update totalTripsCost with costs of trips and include 10% travel agent fee', function() {
    traveler1.findTrips(trips);
    traveler1.findDestinations(destinations);
    traveler1.updateTotalCost();

    traveler2.findTrips(trips);
    traveler2.findDestinations(destinations);
    traveler2.updateTotalCost();

    expect(traveler1.totalTripsCost).to.equal(6968);
    expect(traveler2.totalTripsCost).to.equal(8173);
    
  });
});
