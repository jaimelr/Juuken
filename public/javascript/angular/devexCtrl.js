angular.module('PersonalWeb').controller('DevexController', DevexController);

function DevexController($http, $scope) {

  $http.get('api/devex').then(function(res) {
    $scope.devexList = res.data;
  });
}
