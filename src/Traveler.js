class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.trips = [];
    this.destinations = [];
    this.totalTripsCost = 0;
  };

  findTrips(data) {
    const matchingData = data.filter(trip => {
      return trip.userID === this.id;
    }).forEach(trip => {
      this.trips.push(trip);
    });
  };

  findDestinations(data) {
    const tripIds = this.trips.map(trip => {
      return trip.destinationID
    });

    data.forEach(destination => {
      if(tripIds.includes(destination.id)) {
        this.destinations.push(destination);
      };
    });
  };

  updateTotalCost() {
    const totalCost = this.destinations.reduce((acc, destination) => {
      acc += destination.estimatedFlightCostPerPerson + (destination.estimatedLodgingCostPerDay * this.trips.filter(trip => {
        return trip.destinationID === destination.id;
      }).map(trip => {
        return trip.duration;
      }));
      return acc;
    }, 0);
    this.totalTripsCost = Math.floor(totalCost * 1.1);
  };
};

module.exports = Traveler;
