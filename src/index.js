// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
// import './css/base.scss';
import './css/index.scss';
import Traveler from './traveler';
import Trip from './trip';
import domUpdates from './domUpdates';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

let myTripsButton = document.querySelector('.my-trips-button');
let browseDestinationsButton = document.querySelector('.browse-destinations-button');
let myTripsPage = document.querySelector('.my-trips');
