class TripsRepo {
  constructor(trips) {
    this.data = trips;
  }

  retrieveTravelerTrips(id) {
    return this.data.filter(trip => {
      return trip.userID === id;
    })
  }
}

module.exports = TripsRepo;
