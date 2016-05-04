
angular.module('ng-music')
    .config(function($stateProviderer) {


        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'app/components/home.html'
            })
            .state('catalog', {
                url: '/people',
                templateUrl: 'app/components/people.html',
                controller: 'PeopleController',
                controllerAs: 'ppl'
            })
            .state('details', {
                url: '/person/:id',
                templateUrl: 'app/components/person.html',
                controller: 'PersonController',
                controllerAs: 'dc'
            })
    })