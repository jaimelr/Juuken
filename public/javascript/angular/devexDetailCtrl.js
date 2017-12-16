angular.module('PersonalWeb').controller('DevexDetailController', DevexDetailController);

function DevexDetailController($scope, $http, BindService) {
  $scope.devexDetail = BindService.get();

  $http.get('api/devex').then(function(res) {
    $scope.devexList = res.data;
  });

  $scope.getDevexDetail = function(devex) {
    $scope.devexDetail = devex;
  }

}
