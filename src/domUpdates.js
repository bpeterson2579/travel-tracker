const welcomeTraveler = document.getElementById('welcomeTraveler');
const travelerType = document.getElementById('travelerType');
const currentTrip = document.getElementById('currentTrip');
const pastTrips = document.getElementById('pastTrips');
const upcomingTrips = document.getElementById('upcomingTrips');
const pendingTrips = document.getElementById('pendingTrips');

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
  }
}

const show = (element) => {
  element.classList.remove('hidden');
}

const add = (element) => {
  element.classList.add('hidden');
}

export default domUpdates;
