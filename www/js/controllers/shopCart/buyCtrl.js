define(["app","js/services/allService", "js/services/dataDictService"], function (app) {
  app.controller("buyCtrl", ["$scope","$rootScope", "$state","allService","$util","dataDictService","$ionicPopup",
    function ($scope,$rootScope, $state,allService,$util,dataDictService,$ionicPopup) {
      $rootScope.menu = "shopCar";
      $scope.delOrderItem = function (){
       var confirmPopup =  $ionicPopup.confirm({
          title: '提示信息',
         cssClass:'delModal',
          template: '您确定要删除此产品？',
          buttons: [
            { text: '取消' },
            {
              text: '<b>确认</b>',
              onTap: function(e) {
               /* $state.go("tab.subscribe");*/
              }
            }
          ]
        });
      }


    }]);
})
