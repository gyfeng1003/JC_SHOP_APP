define(["app","js/services/allService"], function (app) {
  app.controller("payOrderCtrl", ["$scope", "$state","allService","$util","$ionicModal","$stateParams",
    function ($scope, $state,allService,$util,$ionicModal,$stateParams) {
          $scope.choosed = 0;
          $scope.setStatus = function(){
            $scope.choosed = !$scope.choosed;
          };

          $scope.payOrderRouter = $stateParams.payOrderRouter;
    }]);
})
