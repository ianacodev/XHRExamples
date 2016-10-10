//DeferController : deferExample.html
xhrExamples.controller('DeferController', ['$log','$q', function($log, $q) {
	var self = this;
	self.test = true;
	
	function wordCheck(word) {
		log('Checing word...');
		var defer = $q.defer();
		if(word.length > 3) {
			log('Word > 3...');
			defer.resolve(word);
		} else {
			log('Word < 3...');
			defer.reject(word);
		}
		log('Returning promise object...');
		return defer.promise;
	}
	
	self.submitWordForm = function(form) {
		if(form.$valid) {
			log('Valid Form submitted...');
			var wordPromise = wordCheck(self.word);
			log('Checking promise object');
			wordPromise.then(function(response) {
				log('Success Response Word > 3 Chars: ', response);
				self.success = true;
			}, function(error) {
				log('Failure Rssponse Word < 3 Chars: ', error);
				self.success = false;
			})
		}else {
			log('Invalid Form submitted...');
		}
	};
	
	function log(msg, obj) {
		console.log(msg, obj);
	}
	
}]);