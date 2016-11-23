define(["app","js/services/allService"], function (app) {
  app.controller("accountInfoCtrl", ["$scope", "$state","allService","$util","$rootScope","$ionicModal",
    function ($scope, $state,allService,$util,$rootScope,$ionicModal) {
        if(!$scope.userModal){
          $ionicModal.fromTemplateUrl("view/person/username.html",{
            scope: $scope
          }).then(function(modal){
            $scope.userModal = modal;
          });
        }
        $scope.userObj = {};
        $scope.setUserName = function(){
          $scope.userModal.show();
        }
        $scope.close = function(){
          $scope.userModal.hide();
        }

        $scope.headPhoto = "img/mine_yong.png";
        $scope.imgSelect = function(){
          $util.openCamera(function(imgUrl){
            $scope.headPhoto = imgUrl;
            $scope.$apply();
          }, function(error){

          }, function(imgUrls){
            $scope.headPhoto = imgUrls[0];
            $scope.$apply();
          }, function(error){

          });
        }

    }]);
})

