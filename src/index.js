import './css/index.scss';
import Traveler from './traveler';
import Trip from './trip';
import networkRequests from './networkRequests';
import domUpdates from './domUpdates';

const myTripsPage = document.querySelector('.my-trips');
const homePage = document.querySelector('.traveler-dashboard');

const myTripsButton = document.querySelector('.my-trips-button');
const browseDestinationsButton = document.querySelector('.browse-destinations-button');
const homeButton = document.querySelector('.home-button');

const totalSpendingDisplay = document.querySelector('.total-annual-spending');

const daysDropdown = document.querySelector('.duration-input');
const travelersDropdown = document.querySelector('.travel-party-input');
const destinationsDropdown = document.querySelector('.destination-input');

let traveler;

window.onload = loadTravelerDashboard();

myTripsButton.addEventListener('click', displayTravelersTrips);
homeButton.addEventListener('click', returnHome);

function loadTravelerDashboard(){
  return Promise.all([
      networkRequests.getData('travelers'),
      networkRequests.getData('trips'),
      networkRequests.getData('destinations')
    ])
    .then(data => {
      const travelerData = data[0].travelers;
      const tripData = data[1].trips;
      const destinationData = data[2].destinations;
      buildPage(travelerData, tripData, destinationData);
    })
    .catch(error => console.log(error))
  }

function buildPage(travelerData, tripData, destinationData){
  compileTravelerInfo(travelerData, tripData, destinationData);
  domUpdates.greetTraveler(traveler.name, traveler.type);
  let dayOptions =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  let travelerOptions = [1,2,3,4,5,6,7,8,9,10];
  addDestinationsToDropdown(destinationsDropdown, destinationData);
  addNumbersToDropdowns(daysDropdown, dayOptions);
  // addNumbersToDropdowns(travelersDropdown, travelerOptions);
}

function compileTravelerInfo(travelerData, tripData, destinationData) {
  let randomID = (Math.floor(Math.random() * 49) + 1)
  let currentTravelerData = travelerData.find(user => {
    return user.id === Number(randomID);
  });
  traveler = new Traveler(currentTravelerData, tripData, destinationData);
}

function displayTravelersTrips(){
  domUpdates.displayOneLiners(totalSpendingDisplay, `Total Travel Spending: $${traveler.calculateAnnualTravelSpending()}`);
  domUpdates.alterClassList('remove', 'hidden', myTripsPage);
  domUpdates.alterClassList('add', 'hidden', homePage);
  traveler.tripBook.forEach(trip => {
    if(trip.status !== 'pending'){
      trip.getTripTiming();
    }
  });
  let pastTrips = traveler.getTripsByStatus('past');
  let presentTrips = traveler.getTripsByStatus('present');
  let upcomingTrips = traveler.getTripsByStatus('upcoming');
  let pendingTrips = traveler.getTripsByStatus('pending');
  domUpdates.displayCategoryOfTrip(pastTrips, 'past')
  domUpdates.displayCategoryOfTrip(presentTrips, 'present')
  domUpdates.displayCategoryOfTrip(upcomingTrips, 'upcoming')
  domUpdates.displayCategoryOfTrip(pendingTrips, 'pending')
}

function returnHome() {
  domUpdates.alterClassList('add', 'hidden', myTripsPage);
  domUpdates.alterClassList('remove', 'hidden', homePage);
}

function postNewTrip(newTrip) {
   const postFormat = {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify(newTrip)
   }

   return fetch('http://localhost:3001/api/v1/trips', postFormat)
     .then(response => response.json())
 }

 function addDestinationsToDropdown(dropdown, destinations) {
    destinations.forEach(destination => {
      const newDestination = document.createElement('option');
      newDestination.value = destination.id;
      newDestination.innerText = destination.destination;
      dropdown.appendChild(newDestination);
    })
}

function addNumbersToDropdowns(dropdown, numberChoices) {
  console.log(dropdown, numberChoices);
    numberChoices.forEach(number => {
      const newSelection = document.createElement('option');
      newSelection.value = number;
      newSelection.innerText = number;
      dropdown.appendChild(newSelection);
    });
}
