define(['app'], function (app) {
	app.directive('qrcode', function($state,$rootScope) { 
		return {
			restrict:'E',
			replace:true,
			scope:{
				text:'='
			},
			template:'<div></div>',
			link:function(scope, element, attrs, ctrls){
				element = $(element[0]);

				var options = {
					width:attrs.size||160,
					height:attrs.size||160,
					text:scope.text
				};

				require(['jqueryQrcode'],function(echarts){
					if(scope.text){
						options.text = scope.text;
						element.qrcode(options);
					}
					scope.$watch('text',function(newValue){
						element.empty();
						if(newValue){
							options.text = newValue;
							element.qrcode(options);
						}
					});
					element.click(function(){
						if(attrs.state){
							$state.go(attrs.state);
						}
					});
				});
			}
		};
	});
});