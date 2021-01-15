let domUpdates = {

  greetTraveler(name, type) {
    const userGreeting = document.querySelector('.user-greeting');
    userGreeting.innerText = `Welcome, ${name}. We hear you're a ${type}.`;
  },

  displayCategoryOfTrip(trips, tripCategory) {
    console.log(trips, tripCategory, trips.length > 0);
    if(trips.length > 0) {
      let tripCategoryDisplay = document.querySelector(`.${tripCategory}`);
      let displayContent = ''
      trips.forEach(trip => {
        displayContent += `<div id='trip-${trip.id}' class='trip-card'>
        <h2>${trip.departureDate}</h2><h2>${trip.durationInDays} Days</h2><h2>${trip.destination.destination}</h2></div>`
      })
      tripCategoryDisplay.innerHTML = displayContent;
    }
  },

  displayOneLiners(element, text) {
  element.innerText = text;
  },

  interactWithClassList(method, className, event, element) {
    if (method === 'add' && element && className) {
      element.classList.add(className);
    } else if (method === 'remove' && element && className) {
      element.classList.remove(className);
    } else if (method === 'contains' && className && element) {
      return element.classList.contains(className);
    } else if (method === 'add' && element === undefined && className) {
      event.target.classList.add(className);
    } else if (method === 'remove' && element === undefined && className) {
      event.target.classList.remove(className);
    } else if (method === 'contains' && className && element === undefined) {
      return event.target.classList.contains(className);
    } else if (method === 'toggle' && element && className) {
      element.classList.toggle(className);
    }
  },
}

export default domUpdates;
