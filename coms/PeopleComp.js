(function () {
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
        
        spp.getData = function (direction){
            spp.currentPage += direction;
            StarWarsService.getPeople(spp.currentPage).then(function(data){
                spp.people = data.results;
                spp.next = data.next;
                spp.prev = data.previous;
            });
        };
        spp.getData(1);
    }
}
    
})();