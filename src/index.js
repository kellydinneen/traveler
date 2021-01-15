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
      let travelerData = data[0];
      let tripData = data[1];
      let destinationData = data[2];
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
  let randomID = (Math.floor(Math.random() * 49) + 1)
  let currentTravelerData = travelerData.find(user => {
    return user.id === Number(randomID);
  });
 traveler = new Traveler(currentTravelerData, tripData, destinationData);

}
