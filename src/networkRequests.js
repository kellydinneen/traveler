const networkRequests = {
  getData(endpoint) {
    return fetch(`http://localhost:3001/api/v1/${endpoint}`)
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.log(error))
  },

  createOrAlterTrip(endpoint, trip) {
    const post = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(trip)
    }

    return fetch(`http://localhost:3001/api/v1/${endpoint}`, post)
      .then(response => response.json())
  },

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
