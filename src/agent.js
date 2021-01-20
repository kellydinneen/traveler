import Trip from './trip';
import Traveler from './traveler';

class Agent {
  constructor(tripData, destinationData, travelerData) {
    this.trips = tripData.map(trip => new Trip(trip, destinationData));
    this.pendingTrips = tripData.filter(trip => trip.status === 'pending');
    this.destinations = destinationData;
    this.clients = travelerData.map(traveler => new Traveler(traveler, tripData, destinationData));
  }
}

export default Agent;
