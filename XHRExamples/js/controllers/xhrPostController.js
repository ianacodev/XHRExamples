//xhrPostController : xhrPostExample.html
xhrExamples.controller('XHRPostController', ['$log', '$http', function($log, $http) {
	var self = this;
	self.test = true;
	self.notes = [];
	self.newNote = {};
	
	/*Get Notes From Server
	 * @function
	 * @Name getNotes
	 */
	self.getNotes = function() {
		return $http.get('api/note').then(function(response) {
			log('Success Response: ', response.status);
			self.notes = response.data;
		}, function(error) {
			log('Error Response: ', error);
		});
	};
	
	self.submitNoteForm = function(form) {
		if(form.$valid) {
			log('Valid Form submitted...');
			$http.post('api/note', self.newNote)
			.then(self.getNotes)
			.then(function(response) {
				self.newNote = {};
				form.$setPristine();
			});
		} else {
			log('Invalid Form submitted...');
		}
	};
	
	function log(msg, obj) {
		$log.log(msg, obj);
	}
}]);