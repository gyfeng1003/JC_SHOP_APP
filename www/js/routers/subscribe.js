define(["app","angularAMD"],function(app,angularAMD){
  app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){

    $stateProvider.state("tab.subscribe",angularAMD.route({
      url:"/subscribe",
      cache: false,
      templateUrl:"view/subscribe/subscribe.html",
      controllerUrl:"js/controllers/subscribe/subscribeCtrl",
      controller:"subscribeCtrl"
    })).state("shopDetail",angularAMD.route({
      url:"/shopDetail/:orderRoute",
      cache: false,
      templateUrl:"view/subscribe/shopDetail.html",
      controllerUrl:"js/controllers/subscribe/shopDetailCtrl",
      controller:"shopDetailCtrl"
    })).state("finishSubscribe",angularAMD.route({
      url:"/finishSubscribe",
      cache: false,
      templateUrl:"view/subscribe/finishSubscribe.html",
      controllerUrl:"js/controllers/subscribe/finishSubscribeCtrl",
      controller:"finishSubscribeCtrl"
    })).state("shops",angularAMD.route({
      url:"/shops",
      cache: false,
      templateUrl:"view/subscribe/shops.html",
      controllerUrl:"js/controllers/subscribe/shopsCtrl",
      controller:"shopsCtrl"
    })).state("reGift",angularAMD.route({
      url:"/reGift",
      cache: false,
      templateUrl:"view/subscribe/reGift.html",
      controllerUrl:"js/controllers/subscribe/reGiftCtrl",
      controller:"reGiftCtrl"
    })).state("finishRegift",angularAMD.route({
      url:"/finishRegift",
      cache: false,
      templateUrl:"view/subscribe/finishRegift.html",
      controllerUrl:"js/controllers/subscribe/finishRegiftCtrl",
      controller:"finishRegiftCtrl"
    }));

  }]);
})
