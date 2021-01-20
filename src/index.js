import './css/index.scss';
import Traveler from './traveler';
import Trip from './trip';
import Agent from './agent';
import networkRequests from './networkRequests';
import domUpdates from './domUpdates';

const loginPage = document.querySelector('.login');
const agentDashboard = document.querySelector('.agent-dashboard');
const homePage = document.querySelector('.traveler-dashboard');
const myTripsPage = document.querySelector('.my-trips');
const formPages = [
  document.querySelector('#f_1'),
  document.querySelector('#f_2'),
  document.querySelector('#f_3'),
  document.querySelector('#f_4')
];
const agentDashboardDisplays = [
  document.querySelector('.clients'),
  document.querySelector('.trips'),
  document.querySelector('.destinations')
]

const agentLoginButton = document.querySelector('.agent-login-button');
const travelerLoginButton = document.querySelector('.login-button');
const myTripsButton = document.querySelector('.my-trips-button');
const logoutButton = document.querySelector('.logout-button');
const homeButton = document.querySelector('.home-button');
const continueButton = document.querySelector('.continue-button');
const backButton = document.querySelector('.back-button');
const finishButton = document.querySelector('.finish-button');

const loginLogo = document.querySelector('#dummy-plane');
const loginErrorMessage = document.querySelector('.login-error-message');
const totalSpendingDisplay = document.querySelector('.total-annual-spending');
const travelerGreeting = document.querySelector('.user-greeting');
const createTripForm = document.querySelector('.trip-form');
const newTripDetails = document.querySelector('.new-trip-details');
const tripDetailView = document.querySelector('.trip-detail-page');

const travelerNameInput = document.querySelector('.name-input');
const travelerIDInput = document.querySelector('.id-input');
const durationInput = document.querySelector('.duration-input');
const newTripYearsDropdown = document.querySelector('.new-trip-year-input');
const monthsDropdown = document.querySelector('.new-trip-month-input');
const daysDropdown = document.querySelector('.new-trip-date-input');
const travelersDropdown = document.querySelector('.travel-party-input');
const destinationsDropdown = document.querySelector('.destination-input');
const spendingYearInput = document.querySelector('.year-input');

let traveler, agent;

window.onload = loadLoginDropdown();

travelerLoginButton.addEventListener('click', loadTravelerDashboard);
agentLoginButton.addEventListener('click', loadAgentDashboard);
myTripsButton.addEventListener('click', displayTravelersTrips);
homeButton.addEventListener('click', returnHome);
continueButton.addEventListener('click', continueForm);
backButton.addEventListener('click', goBackInForm);
finishButton.addEventListener('click', createNewTrip);
myTripsPage.addEventListener('click', viewTripDetails);
agentDashboard.addEventListener('click', viewDetailsForAgent);
spendingYearInput.addEventListener('change', displaySpending);
logoutButton.addEventListener('click', returnToLoginPage);

function loadLoginDropdown(){
  return Promise.all([
      networkRequests.getData('travelers'),
    ])
    .then(data => {
      const travelerData = data[0].travelers;
      domUpdates.addTextOptionsToDropdown(travelerNameInput, travelerData, 'traveler');
    })
    .catch(error => console.log(error))
}

function loadTravelerDashboard(){
  if(approveTravelerLogin()) {
    populatePageInfo('traveler');
  } else {
      const errorMessage = 'Sorry, we do not recognize that combination of name and ID. HINT (for Travis) -- the dropdown menu lists names in order by ID, so, for example, the first name in the menu corresponds to ID "1".';
      domUpdates.displayOneLiners(loginErrorMessage, errorMessage);
    }
  }

function loadAgentDashboard() {
  populatePageInfo('agent');
}

function populatePageInfo(user) {
  return Promise.all([
      networkRequests.getData('travelers'),
      networkRequests.getData('trips'),
      networkRequests.getData('destinations')
    ])
    .then(data => {
      const travelerData = data[0].travelers;
      const tripData = data[1].trips;
      const destinationData = data[2].destinations;
      agent = new Agent(tripData, destinationData, travelerData);
      buildPage(user, tripData, destinationData, travelerData);
    })
    .catch(error => console.log(error))
}

function approveTravelerLogin() {
  const idEntry = Number(travelerIDInput.value);
  const nameEntryID = Number(travelerNameInput.value);
  return idEntry === nameEntryID;
}

function buildPage(user, tripData, destinationData, travelerData){
  if(user === 'traveler') {
    buildTravelerPage(tripData, destinationData, travelerData);
  } else if(user === 'agent') {
    buildAgentPage();
  }
}

function buildTravelerPage(tripData, destinationData, travelerData) {
  createCurrentTraveler(travelerData, tripData, destinationData);
  loadTravelerHomepage();
  domUpdates.greetTraveler(traveler.name, traveler.type);
  window.setTimeout(fadeOutGreeting, 4000);
  window.setTimeout(fadeInForm, 4100);
  populateNewTripFormDropdowns();
}

function populateNewTripFormDropdowns() {
  const possibleMonths = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const possibleDates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  const possibleNumbersOfTravelers = [1,2,3,4,5,6,7,8,9,10];
  domUpdates.addTextOptionsToDropdown(destinationsDropdown, agent.destinations, 'destination');
  domUpdates.addTextOptionsToDropdown(monthsDropdown, possibleMonths,'month');
  domUpdates.addNumbersToDropdowns(daysDropdown, possibleDates);
  domUpdates.addNumbersToDropdowns(travelersDropdown, possibleNumbersOfTravelers);
}

function buildAgentPage() {
  domUpdates.alterClassList('add', 'hidden', loginPage);
  const agentElements = [agentDashboard, logoutButton];
  agentElements.forEach(element => domUpdates.alterClassList('remove', 'hidden', element))
  agentDashboardDisplays.forEach(display => {
    domUpdates.displayListForAgent(display, display.classList[0], agent);
  });
}

function createCurrentTraveler(travelerData, tripData, destinationData) {
  const currentTravelerID = Number(travelerIDInput.value);
  const currentTravelerData = travelerData.find(entry => entry.id === currentTravelerID);
  traveler = new Traveler(currentTravelerData, tripData, destinationData);
}

function loadTravelerHomepage() {
  domUpdates.alterClassList('add', 'hidden', loginPage);
  domUpdates.alterClassList('add', 'hidden', loginLogo);
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
  domUpdates.alterClassList('remove', 'hidden', myTripsPage);
  domUpdates.alterClassList('add', 'hidden', homePage);
  traveler.tripBook.forEach(trip => {
    if(trip.status !== 'pending'){
      trip.getTripTiming();
    }
  });
  spendingYearInput.value = 0;
  domUpdates.displayOneLiners(totalSpendingDisplay, '');
  const tripStatusValues = ['past', 'present', 'upcoming', 'pending'];
  tripStatusValues.forEach(status => {
    const trips = traveler.getTripsByStatus(status);
    domUpdates.displayCategoryOfTrip(trips, status);
  })
}

function displaySpending() {
  if(spendingYearInput.value !== '0'){
    const selectedYear = Number(spendingYearInput.value);
    const spending = traveler.calculateAnnualTravelSpending(selectedYear);
    domUpdates.displayOneLiners(totalSpendingDisplay, `${spending}`);
  }
}

function returnHome() {
  const toHide = [myTripsPage, newTripDetails, tripDetailView];
  hideItems(toHide);
  domUpdates.alterClassList('remove', 'hidden', homePage);
  resetForm();
}

function returnToLoginPage() {
  const toHide = [homePage, myTripsPage, newTripDetails, tripDetailView, createTripForm, agentDashboard, myTripsButton, logoutButton, homeButton];
  hideItems(toHide);
  domUpdates.alterClassList('remove', 'hidden', loginPage);
  domUpdates.alterClassList('remove', 'hidden', loginLogo);
  travelerNameInput.value = 0;
  travelerIDInput.value = '';
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
    newTripYearsDropdown.value !== 0 &&
    monthsDropdown.value !== 0 &&
    daysDropdown.value !== 0 &&
    durationInput.value !== "" &&
    travelersDropdown.value !== 0
  ){
    const tripData = {
      id: Number(agent.trips.length),
      userID: Number(traveler.id),
      destinationID: Number(destinationsDropdown.value),
      travelers: Number(travelersDropdown.value),
      date: `${formatDate()}`,
      duration: Number(durationInput.value),
      status:'pending',
      suggestedActivities:[]
    }
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

function formatDate() {
  return `${newTripYearsDropdown.value}/${monthsDropdown.value}/${daysDropdown.value}`;
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


function hideItems(items) {
  items.forEach(item => {
    if(!item.classList.contains('hidden')){
      domUpdates.alterClassList('add', 'hidden', item);
    }
  })
}

function viewDetailsForAgent() {
  return 1;
}
