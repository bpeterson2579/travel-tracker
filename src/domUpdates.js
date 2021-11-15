const welcomeTraveler = document.getElementById('welcomeTraveler');
const travelerType = document.getElementById('travelerType');
const currentTrip = document.getElementById('currentTrip');
const pastTrips = document.getElementById('pastTrips');
const upcomingTrips = document.getElementById('upcomingTrips');
const pendingTrips = document.getElementById('pendingTrips');

const domUpdates = {

}

const show = (element) => {
  element.classList.remove('hidden');
}

const add = (element) => {
  element.classList.add('hidden');
}

export default domUpdates;
