angular.module('flights', [])

.service('Flights',['$http',function($http) {
    
    this.flightDetails;
    this.tripDetails;

    this.getFlights = function(origin,destination,departure_date,return_date) {
    	url = '/api/get_flights?origin=' + origin + '&destination=' + destination + '&departure_date=' + departure_date + '&return_date=' + return_date;
        return $http({
          url: url,
          method: "GET",
          data: {origin: origin, destination: destination, departure_date: departure_date, return_date: return_date}
        })
    };

    this.tiers = [{'type':'whatever','title':'Flexible Super Saver','description':"Any flights +/- 1 day of your dates. Same trip length.", 'stops':'One stop or nonstop.', 'timeframe':'Anytime during the day','social':'26 people have bought this deal.'},
      {'type':'anytype','title':'Anytime on your dates','description':'You will be booked on a nonstop or one-stop flight departing anytime on your dates.','stops':'One stop or nonstop','timeframe':'Anytime during the day', 'social':'15 people have bought this deal.'},
      {'type':'anytime','title':'Go Nonstop','description':'Nonstop flights departing anytime during the day.','stops':'Nonstop','timeframe':'Anytime during the day','social':'19 people have bought this deal.'}
    ]

    this.tierDetails = function(tier) {
      array = this.tiers
      for(var i = 0; i < array.length; i+=1) {
        if (array[i]['type'] === tier) {
          return array[i];
        }
      }

      return "flights";
    }
}]);