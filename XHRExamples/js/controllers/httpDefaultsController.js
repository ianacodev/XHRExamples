//HttpDefaultsController : httpDefaults.html
xhrExamples.controller('HttpDefaultsController', ['$log', '$http', function($log, $http) {
	var self = this;
	self.test = true;
	
	self.user = {};
	self.message = 'Please Login.';
	self.login = function() {
		$http.post('/api/login', self.user).then(function(response) {
			self.message = response.data.msg;
			console.log('MEssage:L ', self.message);
		});
	}
	
	self.submitLoginForm = function(form) {
		if(form.$valid) {
			log('Valid Form Submitted...');
			self.login();
		}else {
			log('Invalid Form Submitted...');
		}
	};
	
	function log(msg, obj) {
		console.log(msg, obj);
	}
}])
.config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.transformRequest.push(
			function(data) {
				var requestStr;
				if(data) {
					data = JSON.parse(data);
					for(var key in data) {
						if(requestStr) {
						   requestStr += '&' + key + '=' + data[key];
						}else {
							requestStr = key + '=' + data[key];
						}
					}
				}
				return requestStr;
			});
	
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}])