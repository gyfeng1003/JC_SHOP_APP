define(["app"],function(app) {
  app.service("Modal", ["$ionicLoading", function ($ionicLoading) {
    return {
      alert: function(msg){
        $ionicLoading.show({template:"<div style='height: 3px;padding: 0;line-height: 3px;font-size: 12px;'>"+msg+"</div>", duration: 2000});
      }
    }
  }]);
});
