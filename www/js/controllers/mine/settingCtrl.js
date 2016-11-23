define(["app","js/services/allService"], function (app) {
  app.controller("settingCtrl", ["$scope", "$rootScope","$localStorage",
    function ($scope, $rootScope,$localStorage) {
      $scope.exitLogin = function(){
        $localStorage.setObject("loginUser", {});
        $rootScope.go("login");
      }

    }]);
})
