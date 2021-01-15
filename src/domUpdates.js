let domUpdates = {

  greetTraveler(userID) {
    const userGreeting = document.querySelector('.user-info');
    userName.innerText = `Welcome, ${user.name}.`;
  },

  displayCategoryOfTrip(trips, tripCategory) {
    const tripCategorySection = document.querySelector(`.${tripCategory}`);
    trips.forEach(trip => {
      tripCategorySection.insertAdjacentHTML = ('afterbegin', `<div class='trip-card'>
      <h2>${trip.departureDate}</h2><h2>${trip.destination.name}</h2></div>`)
    })
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
