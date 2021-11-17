const welcomeTraveler = document.getElementById('welcomeTraveler');
const travelerType = document.getElementById('travelerType');
const currentTrip = document.getElementById('currentTrip');
const pastTrips = document.getElementById('pastTrips');
const upcomingTrips = document.getElementById('upcomingTrips');
const pendingTrips = document.getElementById('pendingTrips');
const newTripButton = document.getElementById('newTripButton');
const newTripForm = document.querySelector('.new-trip-form');
const submitTripButton = document.getElementById('submitTripButton');
const startDate = document.getElementById('startDate');
const duration = document.getElementById('duration');
const numPassengers = document.getElementById('numPassengers');
const completeForm = document.getElementById('completeForm');
const needsCompletion = document.getElementById('needsCompletion');

const domUpdates = {
  renderDashboard(user) {
    welcomeTraveler.innerText = `Welcome ${user.name}!`;
    user.updateTotalCost();
    travelerType.innerText = `You have spent $${user.totalTripsCost} on vacations`
    upcomingTrips.innerText = user.findUpcomingTrips();
    const pastVacations = user.findPastTrips();
    pastTrips.innerText += `You've been to: `
    pastVacations.forEach(trip => {
      pastTrips.innerText += ` ${trip.destination}; `
    })
  },

  showForm() {
    domUpdates.show(newTripForm);
    domUpdates.hide(newTripButton);
  },

  checkForm() {
    if(startDate.value && duration.value && numPassengers.value) {
      domUpdates.hide(newTripForm);
      completeForm.innerText = 'Your request will be processed by one of our agents';
      setTimeout(domUpdates.resetForm, 3000)
    }else {
      needsCompletion.innerText = 'All entry fields must have a value';
    }
  },

  renderPending(user, destinations) {
    const trips = destinations.data.filter(trip => {
      return trip.id === user.pendingTrips[0].destinationID;
    })
    console.log(trips[0].destination);
    pendingTrips.innerText = `Your trip to ${trips[0].destination} is pending.`;
  },

  resetForm() {
    completeForm.innerText = '';
    domUpdates.show(newTripButton);
  },

  show(element) {
    element.classList.remove('hidden');
  },

  hide(element) {
    element.classList.add('hidden');
  },
}

export default domUpdates;
