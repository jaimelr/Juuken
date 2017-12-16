angular.module('PersonalWeb').controller('DevexController', DevexController);

function DevexController($http, $scope, BindService) {

  $http.get('api/devex').then(function(res) {
    $scope.devexList = res.data;
  });

  $scope.setDevexDetail = function(devex) {
    BindService.set(devex);
  };
}
