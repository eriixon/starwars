angular.module('starwars')
    .component('starWarsPeople',{
        templateUrl: 'pages/person.html',
		controller: starWarsPersonController
});

function starWarsPersonController(StarWarsService){
    var spr = this;
}