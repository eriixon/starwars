(function () {
	
angular.module('starwars')
    .component('getData', {
    templateUrl:
		    <div class="btn-group pull-right">
            <button class="btn btn-primary" ng-click="$ctrl.getData(-1)" ng-disabled="!$ctrl.prev">PREV</button>
            <button class="btn btn-primary" ng-click="$ctrl.getData(1)" ng-disabled="!$ctrl.next">NEXT</button>
        </div>,
		controller: getDataController
	});

//<get-data next="vm.next" prev="vm.prev"></get-data>		
		function getDataController () {


	}	
})();
    
