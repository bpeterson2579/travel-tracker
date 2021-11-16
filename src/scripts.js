import './css/base.scss';
import './images/turing-logo.png'

import Traveler from './Traveler';
import TravelersRepo from './TravelersRepo';
import Trips from './Trips';
import Destinations from './Destinations';

import {fetchData, addData} from './api';
import domUpdates from './domUpdates';

let traveler;

const getData = () => {
  Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
    .then(data => createTravelerDashboard(data))
};

const createTravelerDashboard = (data) => {
  let travelers = new TravelersRepo(data[0].travelers);
  traveler = new Traveler(travelers.data[travelers.returnRandomTraveler()]);
  let trips = new Trips(data[1].trips);
  let destinations = new Destinations(data[2].destinations);
  traveler.findTrips(trips.data);
  traveler.findDestinations(destinations.data);
  traveler.findPastTrips();
  domUpdates.renderDashboard(traveler);
}



window.addEventListener('load', getData);
