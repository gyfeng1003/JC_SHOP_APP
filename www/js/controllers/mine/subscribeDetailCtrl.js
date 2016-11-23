define(["app","js/services/allService"], function (app) {
  app.controller("subscribeDetailCtrl", ["$scope", "$state","allService","$util","$rootScope","$ionicPopup",
    function ($scope, $state,allService,$util,$rootScope,$ionicPopup) {
        $scope.cancelSubscribe = function(){
            var confirmPopup = $ionicPopup.confirm({
              title: '提示信息',
              cssClass: 'cancelModal',
              template: '由于您的订单已经到达店面，取消预约需支付30元快递费用。您也可以转赠给朋友。',
              buttons: [
                { text: '取消' },
                {
                  text: '<b>确定</b>',
                  onTap: function(e) {
                    $state.go("tab.subscribe");
                  }
                }
              ]
            });

            $(".popup-container").click(function(){
              confirmPopup.close();
            });
        }

    }]);
})
