define(["app","js/services/allService"], function (app) {
  app.controller("orderCtrl", ["$scope", "$state","allService","$util","$ionicModal",
    function ($scope, $state,allService,$util,$ionicModal) {

      $scope.toggle = true;
      $scope.toggleEms = function(){
        $scope.toggle = !$scope.toggle;
      }
      //选择快递
      $scope.toggleItem = function(){
        $scope.choose = !$scope.choose;
      }


    }]);
})
