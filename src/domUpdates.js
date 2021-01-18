let domUpdates = {

  greetTraveler(name, type) {
    const userGreeting = document.querySelector('.user-greeting');
    userGreeting.innerHTML = `Welcome, ${name}. <br> We hear you're a ${type}.`;
  },

  displayCategoryOfTrip(trips, tripCategory) {
    // console.log(trips, tripCategory, trips.length > 0);
    if(trips.length > 0) {
      const tripCategoryDisplay = document.querySelector(`.${tripCategory}`);
      let displayContent = ''
      trips.forEach(trip => {
        displayContent += `<div id='trip-${trip.id}' class='trip-card'>
        <h2 class='trip-card-heading'>${trip.destination.destination}</h2><h2>${trip.departureDate}</h2><h2>${trip.durationInDays} Days</h2></div>`;
      })
      tripCategoryDisplay.innerHTML = displayContent;
    }
  },

  displayOneLiners(element, text) {
    element.innerText = text;
  },

  alterClassList(method, className, element) {
    if (method === 'add') {
      element.classList.add(className);
    } else if (method === 'remove') {
      element.classList.remove(className);
    }
  },

addDestinationsToDropdown(dropdown, destinations) {
     destinations.forEach(destination => {
       const newDestination = document.createElement('option');
       newDestination.value = destination.id;
       newDestination.innerText = destination.destination;
       dropdown.appendChild(newDestination);
     })
 },

addNumbersToDropdowns(dropdown, numberChoices) {
     numberChoices.forEach(number => {
       const newSelection = document.createElement('option');
       newSelection.value = number;
       newSelection.innerText = number;
       dropdown.appendChild(newSelection);
     });
 }
}

export default domUpdates;
