angular.module('PersonalWeb').factory('BindService', BindService);

function BindService() {
  var devexDetail;

  function set(devex) {
    devexDetail = devex;
  }

  function get(devex) {
    return devexDetail;
  }

  return {
    set: set,
    get: get
  };
}
