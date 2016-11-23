define(["app","js/services/allService"], function (app) {
  app.controller("reciveAddrCtrl", ["$scope", "$state","allService","$util",
    function ($scope, $state,allService,$util) {
      $scope.addrForm = {};

      $scope.saveAddr = function(){
        $state.go("order");
      }
    }]);
})
