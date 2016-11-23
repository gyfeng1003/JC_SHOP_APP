define(["app","angularAMD"],function(app,angularAMD){
  app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){

    $stateProvider.state("order",angularAMD.route({
      url:"/order/:product",
      cache: false,
      templateUrl:"view/shopCart/order.html",
      controllerUrl:"js/controllers/shopCart/orderCtrl",
      controller:"orderCtrl"
    })).state("tab.shopCar",angularAMD.route({
      url:"/shopCar",
      cache: false,
      templateUrl:"view/shopCart/buy.html",
      controllerUrl:"js/controllers/shopCart/buyCtrl",
      controller:"buyCtrl"
    })).state("payOrder",angularAMD.route({
      url:"/payOrder/:payOrderRouter",
      cache: false,
      templateUrl:"view/shopCart/payOrder.html",
      controllerUrl:"js/controllers/shopCart/payOrderCtrl",
      controller:"payOrderCtrl"
    })).state("finishPay",angularAMD.route({
      url:"/finishPay",
      cache: false,
      templateUrl:"view/shopCart/finishPay.html",
      controllerUrl:"js/controllers/shopCart/finishPayCtrl",
      controller:"finishPayCtrl"
    })).state("reciveAddr",angularAMD.route({
      url:"/reciveAddr",
      cache: false,
      templateUrl:"view/shopCart/reciveAddr.html",
      controllerUrl:"js/controllers/shopCart/reciveAddrCtrl",
      controller:"reciveAddrCtrl"
    }));

  }]);
})
