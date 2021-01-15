import './css/index.scss';
import Traveler from './traveler';
import Trip from './trip';
import domUpdates from './domUpdates';

let myTripsButton = document.querySelector('.my-trips-button');
let browseDestinationsButton = document.querySelector('.browse-destinations-button');
let myTripsPage = document.querySelector('.my-trips');

let traveler;

window.onload = loadTravelerDashboard();

function loadTravelerDashboard(){
  return Promise.all([
      getData('http://localhost:3001/api/v1/travelers'),
      getData('http://localhost:3001/api/v1/trips'),
      getData('http://localhost:3001/api/v1/destinations')
    ])
    .then(data => {
      let travelerData = data[0].travelers;
      let tripData = data[1].trips;
      let destinationData = data[2].destinations;
      buildPage(travelerData, tripData, destinationData);
    })
    .catch(error => console.log(error))
  }

function getData(endpoint){
  return fetch(endpoint)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
}

function buildPage(travelerData, tripData, destinationData){
  compileTravelerInfo(travelerData, tripData, destinationData);
  domUpdates.greetTraveler(traveler.name, traveler.type);
  displayTravelersTrips();
}

function compileTravelerInfo(travelerData, tripData, destinationData) {
  let randomID = (Math.floor(Math.random() * 49) + 1)
  let currentTravelerData = travelerData.find(user => {
    return user.id === Number(randomID);
  });
  console.log(currentTravelerData);
  traveler = new Traveler(currentTravelerData, tripData, destinationData);
}

function displayTravelersTrips(){
  let pastTrips = traveler.getTripsByStatus('past');
  let presentTrips = traveler.getTripsByStatus('present');
  let upcomingTrips = traveler.getTripsByStatus('upcoming');
  let pendingTrips = traveler.getTripsByStatus('pending');
  domUpdates.displayCategoryOfTrip(pastTrips, 'past')
  domUpdates.displayCategoryOfTrip(presentTrips, 'present')
  domUpdates.displayCategoryOfTrip(upcomingTrips, 'upcoming')
  domUpdates.displayCategoryOfTrip(pendingTrips, 'pending')
}
