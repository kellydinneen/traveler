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
    return fetch(`http://localhost:3001/api/v1/trips`, post)
      .then(response => response.json())
      .then((response) => {
        Promise.all([
          this.getData('trips'),
          ])
          .then(data => {
            const newTripData = data[0].trips;
            traveler.tripBook = traveler.getTrips(newTripData);
            agent.trips = newTripData;
            console.log(traveler.tripBook);
          });

      })
  },
 //  postNewTrip(tripData) {
 //  const trip = {
 //    id: 0,
 //    userID: 1001,
 //    destinationID: 22,
 //    travelers: 2,
 //    date: '2020/12/01',
 //    duration: 7,
 //    status: 'pending',
 //    suggestedActivities: []
 //  }
 //   const postFormat = {
 //     method: 'POST',
 //     headers: {'Content-Type': 'application/json'},
 //     body: JSON.stringify(tripData)
 //   }
 //
 //   return fetch('http://localhost:3001/api/v1/trips', postFormat)
 //     .then(response => response.json())
 // },

  deleteTrip(tripID) {
    const post = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    }

    return fetch(`http://localhost:3001/api/v1/trips/${tripID}`, post)
      .then(response => response.json())
  }
}

export default networkRequests;
