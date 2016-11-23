require.config({
  baseUrl:"./",
  paths: {
    cordova: 'cordova',
    angular:"lib/angular/angular",
    util:"js/common/util",
    angularAnimate: 'lib/angular-animate/angular-animate',
    angularSanitize: 'lib/angular-sanitize/angular-sanitize',
    uiRouter: 'lib/angular-ui-router/release/angular-ui-router',
    ionic: 'lib/ionic/js/ionic',
    angularIonic: 'lib/ionic/js/ionic-angular',
    angularAMD:"lib/angularAMD/angularAMD",
    angularCSS:"lib/angular-css/angular-css",
    jquery: "lib/jQuery/jquery",
    app:"js/app",
    localStorage:"js/common/localStorage",
    sessionStorage:"js/common/sessionStorage",
    init:"js/init/init",
    ngCordova:'lib/ngCordova/dist/ng-cordova'
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angularAnimate' : ['angular'],
    'angularSanitize' : ['angular'],
    'uiRouter' : ['angular'],
    'ionic' :  {'exports' : 'ionic'},
    'angularAMD':["angular"],
    'angularCSS':["angular"],
    'angularIonic': ['angular', 'ionic','uiRouter', 'angularAnimate', 'angularSanitize'],
    'app':["angular","ionic",'ngCordova'],
    'util':["angular","ionic","app"],
    'init':["app"],
    'ngCordova':['angular','ionic']
  },
  priority: [
    "angular"
  ]
});

require( [
  'cordova',
  'ionic',
  'angular',
  'app',
 /* "domReady!",*/
  'jquery',
  "init",
 /* "baiduLocation",*/
  'js/services/allService'
   ],
  function(cordova, ionic, angular,app) {
  'use strict';
  angular.bootstrap(document, [app["name"]]);
});
