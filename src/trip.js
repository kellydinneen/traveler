class Trip {
  constructor(tripData, destinationData) {
    this.id = tripData.id;
    this.travelerID = tripData.userID;
    this.destination = destinationData.find(destination => destination.id === tripData.destinationID);
    this.numberOfTravelers = tripData.travelers;
    this.departureDate = tripData.date;
    this.durationInDays = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities
  }

  calculateTripCost() {
    let estimatedLodgingCost = this.destination.estimatedLodgingCostPerDay * this.durationInDays;
    let estimatedFlightCost = this.destination.estimatedFlightCostPerPerson * this.numberOfTravelers;
    let travelAgentFee = 0.1;
    return (estimatedLodgingCost + estimatedFlightCost) * (1 + travelAgentFee);
  }

  getTripTiming() {
    let today = new Date();
    let departureDate = new Date(this.departureDate);
    let returnDate = this.getReturnDate(departureDate);
    if(today < departureDate) {
      this.status = 'upcoming';
    } else if (today > departureDate && today < returnDate){
      this.status = 'present';
    } else if (today > returnDate){
      this.status = 'past'
    }
  }

  getReturnDate(departure) {
    var returnDate = new Date(departure);
    returnDate.setDate(returnDate.getDate() + this.durationInDays);
    return returnDate;
  }

}
export default Trip;
