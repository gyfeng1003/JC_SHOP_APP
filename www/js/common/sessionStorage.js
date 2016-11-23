/**
 * session共享服务
 */
define(["app"], function (app) {
  app.factory("$sessionStorage", ["$window", function ($window) {
    return {
      set: function (key, value) {
        $window.sessionStorage.setItem(key,value);
      },
      get: function (key) {
        return $window.sessionStorage.getItem(key);
      },
      removeItem:function(key){
        $window.sessionStorage.removeItem(key);
      },
      clear:function(){
        $window.sessionStorage.clear();
      }
    }
  }]);
})
