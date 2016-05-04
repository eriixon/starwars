angular.module('starwars', [])
  .service('StarWarsService', function($q, $http){
    
    /**
     * https://swapi.co/
     * All the Star Wars data you've ever wanted:
     * Planets, Spaceships, Vehicles, People, Films and Species
     * From all SEVEN Star Wars films
     * Now with The Force Awakens data!
    */
    
    var baseUrl = 'http://swapi.co/api'
    

    
    this.getPeople = function(){
      
      var deferred = $q.promise();
      
      $http.get(baseUrl + 'people').then(function(res){
        deferred.resolve(res.data);
      })
      
      return deferred.promise;
    }
    
    this.getPerson = function(id){
      return $http.get(baseUrl + 'people/' + id).then(function(res){
        return res.data;
      })
    }
    
  })