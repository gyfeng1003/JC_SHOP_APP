define(["app","js/services/allService", "js/services/homeService"], function (app) {
  app.controller("shopDetailCtrl", ["$scope","$rootScope", "$state","allService","$util","$ionicModal","homeService","$stateParams",
    function ($scope,$rootScope, $state,allService,$util,$ionicModal,homeService,$stateParams) {
        $scope.imgUrls = ['img/demo.png','img/demo.png','img/demo.png','img/demo.png','img/demo.png'];
        $scope.homeService = homeService;
       /* $rootScope.menu = "subscribe";*/
        $scope.orderRoute = $stateParams.orderRoute;

          //选择美容师
          if (!$scope.professerModal){
            $ionicModal.fromTemplateUrl('view/subscribe/professer.html', {
              scope: $scope
            }).then(function (modal) {
              $scope.professerModal = modal;
            });
          }
          $scope.selectProfesser = function(){
            $scope.professerModal.show();
          }
          //关闭
          $scope.close = function(){
            $scope.professerModal.hide();
          }

          $scope.toggleItem = function(){
            $scope.choose = !$scope.choose;
          }
          $scope.date = true;
          $scope.toggleDate = function(){
            $scope.date = !$scope.date;
            $scope.showTime = !$scope.showTime;
          }
          $scope.toggleTime = function(){
            $scope.time = !$scope.time;
          }
    }]);
})
