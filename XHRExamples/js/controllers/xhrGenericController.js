//xhrGenericController : xhrGenericExample.html
xhrExamples.controller('XHRGenericContrller', ['$log','$scope', function($log, $scope) {
	var self = this;
	self.test = true;
	
	self.runTest = function() {
		var xhr = new XMLHttpRequest(),
			response;
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200) {
				self.xhrResponse = true;
			} else if (xhr.status == 400) {
				self.xhrResponse = false;
			}
			log('xhrReayState: ', xhr.readyState);
			log('xhrStatus: ', xhr.status);
			setTimeout(function(){$scope.$apply()});
		}
		
		xhr.open('GET', 'http://localhost:8000', true);
		xhr.send();
	};
	
	function log(msg, obj) {
		$log.log(msg, obj);
	}
}]);