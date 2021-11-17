import './css/base.scss';
import './images/turing-logo.png'

import Traveler from './Traveler';
import TravelersRepo from './TravelersRepo';
import Trips from './Trips';
import Destinations from './Destinations';

import {fetchData, addData} from './api';
import domUpdates from './domUpdates';

const newTripButton = document.getElementById('newTripButton');
const newTripForm = document.querySelector('.new-trip-form');
const submitTripButton = document.getElementById('submitTripButton');
const startDate = document.getElementById('startDate');
const duration = document.getElementById('duration');
const numPassengers = document.getElementById('numPassengers');
// const tripList = document.getElementById('tripList');

let traveler;
let trips;
let destinations;

const grabData = () => {
  Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
    .then(data => createTravelerDashboard(data))
};

const createTravelerDashboard = (data) => {
  let travelers = new TravelersRepo(data[0].travelers);
  traveler = new Traveler(travelers.data[travelers.returnRandomTraveler()]);
  trips = new Trips(data[1].trips);
  destinations = new Destinations(data[2].destinations);
  traveler.findTrips(trips.data);
  traveler.findDestinations(destinations.data);
  traveler.findPastTrips();
  domUpdates.renderDashboard(traveler);
}

const createTripRequest = () => {
  event.preventDefault();
  if(startDate.value && duration.value && numPassengers.value) {
    const tripObj = {
      id: trips.data.length + 1,
      userID: traveler.id,
      destinationID: Number(tripList.value),
      travelers: Number(numPassengers.value),
      date: startDate.value,
      duration: Number(duration.value),
      status: 'pending',
      suggestedActivities: [],
    }
    addData(tripObj, 'trips')
    .then(data => updatePending(data))
    .catch(err => console.log(err, "error"))
    traveler.pendingTrips.push(tripObj);
    traveler.pendingTrips.splice(traveler.pendingTrips.length, 1);
  }
  domUpdates.checkForm();
  domUpdates.renderPending(traveler, destinations);
}

const updatePending = (dataObj) => {
  traveler.pendingTrips.push(dataObj)
}

submitTripButton.addEventListener('click', createTripRequest);
newTripButton.addEventListener('click', domUpdates.showForm);
window.addEventListener('load', grabData);
