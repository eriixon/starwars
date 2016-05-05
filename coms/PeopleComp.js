(function () {
	'use strict';

	angular.module('starwars')
	.component('starWarsPeople', {
		templateUrl: 'pages/people.html',
		controller: starWarsPeopleController
	});
	debugger
	starWarsPeopleController.$inject = ['starWarsApi'];	//FOR MINIFICATION

	function starWarsPeopleController(starWarsApi) {
		
		var vm = this;
		vm.$onInit = activate;
		vm.people = [];
        vm.currentPage = 0;
		
		function activate() {
			
            vm.getData = function(direction){
                vm.currentPage += direction
                starWarsApi.getPeople(vm.currentPage).then(function(data){
                    vm.people = data.results;
                    vm.next = data.next;
                    vm.prev = data.previous;
                });
            };
            vm.getData(1);
		}	

	}	
})();