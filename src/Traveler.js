class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.trips = [];
    this.destinations = [];
    this.pendingTrips = [];
    this.totalTripsCost = 0;
  };

  findTrips(data) {
    const matchingData = data.filter(trip => {
      return trip.userID === this.id;
    })

    matchingData.filter(trip => {
      return trip.status === 'approved';
    }).forEach(trip => {
      this.trips.push(trip);
    });

    matchingData.filter(trip => {
      return trip.status === 'pending';
    }).forEach(trip => {
      this.pendingTrips.push(trip);
    })
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

  findUpcomingTrips() {
    const futureTrip = this.trips.filter(trip => {
      return trip.date > "2022/11/16";
    }).map(trip => {
      return trip.destinationID
    })

    const matchedDestination = this.destinations.filter(destination => {
      return destination.id === futureTrip[0]
    })

    if(matchedDestination.length > 0) {
      return `The ${this.travelerType} traveler has an upcoming trip to ${matchedDestination[0].destination}!`
    }else {
      return `It looks like the ${this.travelerType} doesn't have any upcoming trips.`;
    }
  }

  findPastTrips() {
    const pastTrips = this.trips.filter(trip => {
      return trip.date < "2022/11/16";
    }).map(trip => {
      return trip.destinationID
    });

    const matchedDestinations = [];
    this.destinations.forEach(destination => {
      if(pastTrips.includes(destination.id)) {
        matchedDestinations.push(destination);
      }
    })
    return matchedDestinations;
  }
};

module.exports = Traveler;
