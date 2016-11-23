define(["app","js/services/allService", "js/services/dataDictService"], function (app) {
  app.controller("shopsCtrl", ["$scope","$rootScope", "$state","allService","$util","dataDictService","$ionicModal",
    function ($scope,$rootScope, $state,allService,$util,dataDictService,$ionicModal) {
       $scope.dataDictService = dataDictService;
       $rootScope.menu = "subscribe";
       $scope.provinceCn = "全城";
       $scope.province = '';

       if (!$scope.cityModal){
         $ionicModal.fromTemplateUrl('view/home/cities.html', {
            scope: $scope
         }).then(function (modal) {
            $scope.cityModal = modal;
         });
       }
       //全城
       $scope.selectCity = function(){
          $scope.cityModal.show();
       }
       //关闭
       $scope.close = function(){
          $scope.cityModal.hide();
       }
       //选择城市
       $scope.chooseCity = function(province){
          $scope.provinceCn = province.text;
          $scope.province = province.value;
          $scope.cityModal.hide();
       }
      //好评事件
      $scope.toggleSort = function(){
        $scope.ascSort = !$scope.ascSort;
      }


    }]);
})
