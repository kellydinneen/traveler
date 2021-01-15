class Traveler {
  constructor(travelerData, allTripData, allDestinationData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
    this.destinations = allDestinationData;
    this.tripBook = allTripData.reduce((allUserTrips, trip) => {
      if(trip.userID === this.userID){
        let newTrip = new Trip(trip, this.destinations);
        allUserTrips.push(newTrip);
      }
      return acc;
    }, []);
  }

  calculateAnnualTravelSpending() {
    return this.tripBook.reduce((totalCost, trip) => {
      return totalCost += trip.calculateTripCost();
    },0)
  }
}
