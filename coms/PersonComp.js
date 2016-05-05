(function () {
	'use strict';

	angular.module('starwars')

	.component('starWarsPerson', {
		bindings: {
			person: '<'
		},
		require: {
        	people: '^starWarsPeople'
    	},
		templateUrl: 'pages/person.html',
		controller: starWarsPersonController
	});

	starWarsPersonController.$inject = [];
	debugger
	function starWarsPersonController() {

		var vm = this;

		vm.$onInit = function () {
			console.log('Person: ', vm.person);
		}
	}
})();