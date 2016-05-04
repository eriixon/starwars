angular.module('starwars')
    .component('starWarsPeople',{
        templateUrl: 'pages/people.html',
		controller: starWarsPeopleController
});
function starWarsPeopleController(StarWarsService){
    var spp = this;
    spp.$OnInit = getPeople;
    spp.people = [];
    
    function getPeople(){
        
        spp.getData = function ()
    }
    
}