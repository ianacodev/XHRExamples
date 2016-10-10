//xhrGetController : xhrGetExample.html
xhrExamples.controller('XHRGetController', ['$log', '$http', function($log, $http) {
	var self = this;
	self.test = true;
	
	self.getNotes = function() {
		log('Retreiving notes from server...');
		$http.get('/api/note').then(function(response) {
			self.notes = response.data;
			log('Succes Response: ', response.status);
		}, function(error) {
			log('Error response: ', error);
		})
	};
	
	function log(msg, obj) {
		$log.log(msg, obj);
	}
}]);