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
}
