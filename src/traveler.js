class Traveler {
  constructor(travelerData, allTripData, allDestinationData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.type = travelerData.travelerType;
    this.destinations = allDestinationData;
    this.tripBook = allTripData.reduce((allUserTrips, trip) => {
      if(trip.userID === this.userID){
        let newTrip = new Trip(trip, this.destinations);
        allUserTrips.push(newTrip);
      }
      return allUserTrips;
    }, []);
  }

  calculateAnnualTravelSpending() {
    return this.tripBook.reduce((totalCost, trip) => {
      return totalCost += trip.calculateTripCost();
    },0)
  }

  getTripsByStatus(status) {
    return this.tripBook.filter(trip => trip.status === status);
  }
}

export default Traveler;
