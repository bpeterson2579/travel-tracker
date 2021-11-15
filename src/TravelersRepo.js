class TravelersRepo {
  constructor(travelersData) {
    this.data = travelersData;
  };

  retrieveUserData(id) {
    return this.data.find((traveler) => {
      return traveler.id === id;
    });
  };

  returnRandomTraveler() {
    return Math.floor(Math.random() * this.data.length);
  };
};

module.exports = TravelersRepo;
