xhrExamples.controller('PromiseChainController', ['$log', '$http', '$timeout', function($log, $http, $timeout) {
	var self = this;
	self.test = true;
	
	self.runTest = function() {
		log('Running Promise Chain Test...');
		var finalResponse = '';
		$http.get('api/note/1').then(function(response) {
			self.promiseOne = true;
			self.note1 = response.data;
			finalResponse += self.note1.author;
			log('Promise Chain 1: ', response.status);
			return $timeout(function(){ return $http.get('api/note/2')}, 3000);
		}).then(function(response) {
			self.promiseTwo = true;
			self.note2 = response.data;
			finalResponse += self.note2.author;
			log('Promise Chain 2: ', response.status);
			return $timeout(function(){ return $http.get('api/note/3')}, 3000);
		}).then(function(response) {
			self.promiseThree = true;
			self.note3 = response.data;
			finalResponse += self.note1.author;
			log('Promise Chain 3: ', response.status);
			self.finalResponse = finalResponse;
		}, function(error) {
			console.log('Error Response...');
		})
	};
	
	function log(msg, obj) {
		$log.log(msg, obj);
	}
}]);