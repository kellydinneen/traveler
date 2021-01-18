class Agent {
  constructor(tripData, destinationData, travelerData) {
    this.trips = tripData;
    this.pendingTrips = tripData.filter(trip => trip.status === 'pending');
    this.destinations = destinationData;
    this.clients = travelerData;
  }
}

export default Agent;
