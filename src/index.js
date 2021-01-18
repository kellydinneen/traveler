import './css/index.scss';
import Traveler from './traveler';
import Trip from './trip';
import networkRequests from './networkRequests';
import domUpdates from './domUpdates';

const myTripsPage = document.querySelector('.my-trips');
const homePage = document.querySelector('.traveler-dashboard');
const formPages = [
  document.querySelector('#f_1'),
  document.querySelector('#f_2'),
  document.querySelector('#f_3'),
  document.querySelector('#f_4')
];

const myTripsButton = document.querySelector('.my-trips-button');
const browseDestinationsButton = document.querySelector('.browse-destinations-button');
const homeButton = document.querySelector('.home-button');
const continueButton = document.querySelector('.continue-button');
const backButton = document.querySelector('.back-button');

const totalSpendingDisplay = document.querySelector('.total-annual-spending');
const travelerGreeting = document.querySelector('.user-greeting');
const createTripForm = document.querySelector('.trip-form');

const daysDropdown = document.querySelector('.duration-input');
const travelersDropdown = document.querySelector('.travel-party-input');
const destinationsDropdown = document.querySelector('.destination-input');

let traveler;

window.onload = loadTravelerDashboard();

myTripsButton.addEventListener('click', displayTravelersTrips);
homeButton.addEventListener('click', returnHome);
continueButton.addEventListener('click', continueForm);
backButton.addEventListener('click', goBackInForm);

function continueForm() {
  const pageNumber = parseInt(continueButton.id);
  const currentFormPage = formPages[pageNumber];
  const nextFormPage = formPages[pageNumber + 1];
  domUpdates.alterClassList('add', 'hidden', currentFormPage);
  domUpdates.alterClassList('remove', 'hidden', nextFormPage);
  continueButton.id = `${pageNumber + 1}`;
  if (continueButton.id === '1') {
    domUpdates.alterClassList('remove', 'hidden', backButton);
  }
}

function goBackInForm() {
  const pageNumber = parseInt(continueButton.id);
  const currentFormPage = formPages[pageNumber];
  const previousFormPage = formPages[pageNumber - 1];
  domUpdates.alterClassList('add', 'hidden', currentFormPage);
  domUpdates.alterClassList('remove', 'hidden', previousFormPage);
  continueButton.id = `${pageNumber - 1}`;
  if (continueButton.id === '0') {
    domUpdates.alterClassList('add', 'hidden', backButton);
  }
}



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
  window.setTimeout(fadeOutGreeting, 4500);
  window.setTimeout(fadeInForm, 4600);
  domUpdates.addDestinationsToDropdown(destinationsDropdown, destinationData);
  const travelerOptions = [1,2,3,4,5,6,7,8,9,10];
  domUpdates.addNumbersToDropdowns(travelersDropdown, travelerOptions);
}

function fadeOutGreeting() {
  domUpdates.alterClassList('add', 'hidden', travelerGreeting)
}

function fadeInForm() {
  domUpdates.alterClassList('remove', 'hidden', createTripForm)
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
