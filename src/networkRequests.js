const networkRequests = {

  getData(endpoint) {
    return fetch(`http://localhost:3001/api/v1/${endpoint}`)
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.log(error))
  },

  createOrAlterTrip(endpoint, trip, traveler, agent) {
    const post = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(trip)
    }
    return fetch(`http://localhost:3001/api/v1/${endpoint}`, post)
      .then(response => response.json())
      .then((response) => {
        Promise.all([
          this.getData('trips'),
          ])
          .then(data => {
            const newTripData = data[0].trips;
            if(traveler !== undefined) {
              traveler.tripBook = traveler.getTrips(newTripData);
            }
            agent.trips = newTripData;
          });

      })
  }
}

export default networkRequests;
