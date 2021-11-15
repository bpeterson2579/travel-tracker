class Destinations {
  constructor(data) {
    this.data = data;
  };

  retrieveTravelerDestinations(id) {
    return this.data.filter(destination => {
      return destination.id === id;
    });
  };
};

module.exports = Destinations;
