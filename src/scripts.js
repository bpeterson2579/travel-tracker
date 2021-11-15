import './css/base.scss';
import './images/turing-logo.png'

import Traveler from './Traveler';
import TravelersRepo from './TravelersRepo';
import Trips from './Trips';
import Destinations from './Destinations';

import {fetchData, addData} from './api';
import domUpdates from './domUpdates';

let travelers;
let trips;
let traveler;

const getData = () => {
  Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
    .then(data => createTravelerDashboard(data))
};

const createTravelerDashboard = (data) => {
  travelers = new TravelersRepo(data[0].travelers);
  traveler = new Traveler(travelers.data[travelers.returnRandomTraveler()]);
  trips = new Trips(data[1].trips);
  traveler.findTrips(trips.retrieveTravelerTrips(traveler.id));
  console.log(traveler.trips);
}

window.addEventListener('load', getData);
