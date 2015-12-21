angular.module('f1Tracker.controllers',[]).
/* Drivers Controller */
controller('driversController', function($scope, ergastAPIservice){
  $scope.driversList = [];
  $scope.query = [];
  $scope.queryBy= '$';
  $scope.nameFilter = null;
  $scope.orderProp="driver.Driver.givenName";


  ergastAPIservice.getDrivers().success(function (response){
    $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  });
}).
/* Driver controller */
  controller('driverController', function($scope, $routeParams, ergastAPIservice) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;

    ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
    });

    ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races;
    });
});
