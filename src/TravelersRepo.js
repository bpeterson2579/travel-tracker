class TravelersRepo {
  constructor(travelersData) {
    this.data = travelersData;
  };

  retrieveUserData(id) {
    return this.data.find((traveler) => {
      return traveler.id === id;
    });
  };
};

module.exports = TravelersRepo;
