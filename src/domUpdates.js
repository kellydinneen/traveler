let domUpdates = {

  greetTraveler(name, type) {
    const userGreeting = document.querySelector('.user-greeting');
    userGreeting.innerHTML = `Welcome, ${name}. <br> We hear you're a ${type}.`;
  },

  displayCategoryOfTrip(trips, tripCategory) {
    if(trips.length > 0) {
      const tripCategoryDisplay = document.querySelector(`.${tripCategory}`);
      let displayContent = ''
      trips.forEach(trip => {
        displayContent += `<div id='${trip.id}trip' class='trip-card'>
        <h2 id='${trip.id}trip' class='trip-card-heading'>${trip.destination.destination}</h2><h2 id='${trip.id}trip'>${trip.departureDate}</h2><h2 id='${trip.id}trip'>${trip.durationInDays} Days</h2></div>`;
      })
      tripCategoryDisplay.innerHTML = displayContent;
    }
  },

  displayListForAgent(list, property, agent) {
      let displayContent = ''
      let title, detail;
      agent[property].forEach(item => {
        if(property === 'trips') {
          title = item.destination.destination;
          detail = `${item.departureDate}, ${item.durationInDays} days, ${item.numberOfTravelers} travelers`
        } else if(property === 'clients') {
          title = item.name;
          detail = `${item.tripBook.length} total trips`
        } else if(property === 'destinations') {
          title = item.destination;
          detail = `$${item.estimatedFlightCostPerPerson} flight`
        }
        displayContent += `<div id='${item.id}agent' class='agent-card agent-${property}-card'>
        <h2 id='${item.id}agent' class='agent-card-title'>${title}</h2><h2 id='${item.id}agent' class='agent-card-detail'>${detail}</h2></div>`;
      })
      list.innerHTML = displayContent;
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

addTextOptionsToDropdown(dropdown, array, type) {
    let itemTally = 1;
     array.forEach(item => {
       const newOption = document.createElement('option');
       if(type === 'destination') {
         newOption.value = item.id;
         newOption.innerText = item.destination;
       } else if(type === 'traveler') {
         newOption.value = item.id;
         newOption.innerText = item.name;
       } else {
         newOption.value = itemTally;
         newOption.innerText = item;
       }
       dropdown.appendChild(newOption);
        itemTally++
     })
 },

addNumbersToDropdowns(dropdown, numberChoices) {
     numberChoices.forEach(number => {
       const newSelection = document.createElement('option');
       newSelection.value = number;
       newSelection.innerText = number;
       dropdown.appendChild(newSelection);
     });
 },

 displayTripDetails(trip, element) {
   element.classList.remove('hidden');
   let tensedLanguage, message;
   if(trip.status === 'past') {
     tensedLanguage = ['traveled', 'left', 'returned'];
     message = 'We hope you enjoyed your adventure!'
   } else if(trip.status === 'pending') {
     tensedLanguage = ['would like to travel', 'plan to leave', 'return'];
     message = 'This trip is pending. Standby for your agent to approve this trip and provide you with a list of suggested adventures at your destination:'
   } else if(trip.status === 'present' || trip.status === 'upcoming') {
     tensedLanguage = ['are traveling', 'leave', 'return'];
     message = 'Your trip is approved! Standby for your agent to provide you with a list of suggested adventures at your destination:';
   }
   element.innerHTML = `<img class='trip-image' src=${trip.destination.image}><h3>You ${tensedLanguage[0]} to ${trip.destination.destination}</h3><h3>You and ${trip.numberOfTravelers - 1} others ${tensedLanguage[1]} on ${trip.departureDate} and ${tensedLanguage[2]} ${trip.durationInDays} days later.</h3><h4>${message}</h4><h4>${trip.suggestedActivities}</h4>`;
 }
}

export default domUpdates;
