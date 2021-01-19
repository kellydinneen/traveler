import './css/index.scss';
import Traveler from './traveler';
import Trip from './trip';
import Agent from './agent';
import networkRequests from './networkRequests';
import domUpdates from './domUpdates';

const loginPage = document.querySelector('.login');
const homePage = document.querySelector('.traveler-dashboard');
const myTripsPage = document.querySelector('.my-trips');
const formPages = [
  document.querySelector('#f_1'),
  document.querySelector('#f_2'),
  document.querySelector('#f_3'),
  document.querySelector('#f_4')
];

const travelerLoginButton = document.querySelector('.login-button');
const myTripsButton = document.querySelector('.my-trips-button');
const logoutButton = document.querySelector('.logout-button');
const homeButton = document.querySelector('.home-button');
const continueButton = document.querySelector('.continue-button');
const backButton = document.querySelector('.back-button');
const finishButton = document.querySelector('.finish-button');

const loginErrorMessage = document.querySelector('.login-error-message');
const totalSpendingDisplay = document.querySelector('.total-annual-spending');
const travelerGreeting = document.querySelector('.user-greeting');
const createTripForm = document.querySelector('.trip-form');
const newTripDetails = document.querySelector('.new-trip-details');
const tripDetailView = document.querySelector('.trip-detail-page');

const travelerNameInput = document.querySelector('.name-input');
const travelerIDInput = document.querySelector('.id-input');
const durationInput = document.querySelector('.duration-input');
const dateInput = document.querySelector('.departure-date-input');
const travelersDropdown = document.querySelector('.travel-party-input');
const destinationsDropdown = document.querySelector('.destination-input');

let traveler, agent;

window.onload = loadLoginDropdown();

travelerLoginButton.addEventListener('click', loadTravelerDashboard);
myTripsButton.addEventListener('click', displayTravelersTrips);
homeButton.addEventListener('click', returnHome);
continueButton.addEventListener('click', continueForm);
backButton.addEventListener('click', goBackInForm);
finishButton.addEventListener('click', createNewTrip);
myTripsPage.addEventListener('click', viewTripDetails)

// destinationsDropdown.addEventListener('change', updateDestinationSelection);
// travelersDropdown.addEventListener('change', updateTravelersSelection);
// durationInput.addEventListener('change', updateDurationSelection);

function loadLoginDropdown(){
  return Promise.all([
      networkRequests.getData('travelers'),
    ])
    .then(data => {
      const travelerData = data[0].travelers;
      domUpdates.addTextOptionsToDropdown(travelerNameInput, travelerData);
    })
    .catch(error => console.log(error))
}

function loadTravelerDashboard(){
  if(approveTravelerLogin()) {
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
    } else {
      loginErrorMessage.innerText = 'Sorry, we do not recognize that combination of name and id.';
    }
  }

function approveTravelerLogin() {
  const idEntry = Number(travelerIDInput.value);
  console.log('idENTRY',travelerIDInput.value, idEntry);
  const nameEntryID = Number(travelerNameInput.value);
  console.log('nameENTRYID',travelerNameInput.value, nameEntryID);
  return idEntry === nameEntryID;
}

function buildPage(travelerData, tripData, destinationData){
  createCurrentTraveler(travelerData, tripData, destinationData);
  agent = new Agent(tripData, destinationData, travelerData);
  loadHomepage();
  domUpdates.greetTraveler(traveler.name, traveler.type);
  window.setTimeout(fadeOutGreeting, 4000);
  window.setTimeout(fadeInForm, 4100);
  domUpdates.addTextOptionsToDropdown(destinationsDropdown, destinationData);
  const travelerOptions = [1,2,3,4,5,6,7,8,9,10];
  domUpdates.addNumbersToDropdowns(travelersDropdown, travelerOptions);
}

function createCurrentTraveler(travelerData, tripData, destinationData) {
  const currentTravelerID = Number(travelerIDInput.value);
  const currentTravelerData = travelerData.find(entry => entry.id === currentTravelerID);
  console.log(currentTravelerData, currentTravelerID);
  traveler = new Traveler(currentTravelerData, tripData, destinationData);
}

function loadHomepage() {
  domUpdates.alterClassList('add', 'hidden', loginPage);
  const homeElements = [homePage, myTripsButton, logoutButton, homeButton];
  homeElements.forEach(element => domUpdates.alterClassList('remove', 'hidden', element))
}

function fadeOutGreeting() {
  domUpdates.alterClassList('add', 'hidden', travelerGreeting)
}

function fadeInForm() {
  domUpdates.alterClassList('remove', 'hidden', createTripForm)
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
  resetForm();
}

function resetForm() {
  createTripForm.reset();
  continueButton.id = '0';
  domUpdates.alterClassList('remove', 'hidden', continueButton);
  if(!backButton.classList.contains('hidden')){
    domUpdates.alterClassList('add', 'hidden', backButton);
  }
  formPages.forEach(page => {
    if(page.id === 'f_1'){
      domUpdates.alterClassList('remove', 'hidden', page);
    } else if(!page.classList.contains('hidden')){
      domUpdates.alterClassList('add', 'hidden', page)
    }
  })
}

function viewTripDetails(event) {
  if(event.target.classList.contains('trip-card') || event.target.parentNode.classList.contains('trip-card')){
    const tripID = parseInt(event.target.id);
    const trip = traveler.tripBook.find(entry => entry.id === tripID);
    domUpdates.alterClassList('add', 'hidden', myTripsPage);
    domUpdates.displayTripDetails(trip, tripDetailView);
  }
}

function createNewTrip() {
  if(
    destinationsDropdown.value !== 0 &&
    dateInput.value !== "" &&
    durationInput.value !== "" &&
    travelersDropdown.value !== 0
  ){
    const tripData = {
      id: Number(agent.trips.length),
      userID: Number(traveler.id),
      destinationID: Number(destinationsDropdown.value),
      travelers: Number(travelersDropdown.value),
      date: `${dateInput.value}`,
      duration: Number(durationInput.value),
      status:'pending',
      suggestedActivities:[]
    }
    console.log(tripData);
    domUpdates.alterClassList('add', 'hidden', finishButton);
    domUpdates.alterClassList('add', 'hidden', backButton);
    domUpdates.alterClassList('add', 'hidden', formPages[3]);
    const newTrip = new Trip(tripData, traveler.destinations);
    domUpdates.displayTripDetails(newTrip, newTripDetails);
    networkRequests.createOrAlterTrip('trips', tripData, traveler, agent);
  } else {
    console.log('MISSING TRIP INFORMATION');
  }
}

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
  if(continueButton.id === '3') {
    domUpdates.alterClassList('add', 'hidden', continueButton);
    domUpdates.alterClassList('remove', 'hidden', finishButton);
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
  } else if (continueButton.id === '2') {
    domUpdates.alterClassList('remove', 'hidden', continueButton);
    domUpdates.alterClassList('add', 'hidden', finishButton);
  }
}
