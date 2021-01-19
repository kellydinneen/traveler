import Trip from './trip';

class Traveler {
  constructor(travelerData, allTripData, allDestinationData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.type = travelerData.travelerType;
    this.destinations = allDestinationData;
    this.tripBook = this.getTrips(allTripData);
  }

  getTrips(data) {
    let userTrips = data.filter(trip => trip.userID === this.id);
    return userTrips.map(trip => new Trip(trip, this.destinations));
  }

  calculateAnnualTravelSpending() {
    // const thisYearsTripsthis.tripBook.filter
    return this.tripBook.reduce((totalCost, trip) => {
      return totalCost += trip.calculateTripCost();
    },0)
  }

  getTripsByStatus(status) {
    return this.tripBook.filter(trip => trip.status === status);
  }
}

export default Traveler;
