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

  calculateAnnualTravelSpending(year) {
    const thisYearsTrips = this.tripBook.filter(trip => {
      const date = new Date(trip.departureDate);
      return date.getFullYear() === year;
    });
    if(thisYearsTrips.length > 0){
      const annualSpending = thisYearsTrips.reduce((totalCost, trip) => {
        return totalCost += trip.calculateTripCost();
      },0)
      return `$${annualSpending.toFixed(2)}`;
    } else {
      return `Your spending is $0 for ${year}. Must not have caught the travel bug, huh?`;
    }
  }

  getTripsByStatus(status) {
    return this.tripBook.filter(trip => trip.status === status);
  }
}

export default Traveler;
