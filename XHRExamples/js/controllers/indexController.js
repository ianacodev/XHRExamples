//IndexController : index.html
'use strict'
xhrExamples.controller('IndexController', ['$log', function($log) {
	var self = this;
	self.test = true;
	self.displayPage = {};
	self.displayPage.header = 'Examples Display';
	self.xhrExamples = [
	                    {id: 0, header: 'XHR Generic Example', label: 'XHR-Generic-Example', href: "xhrGenericExample.html"},
	                    {id: 1, header: 'XHR GET Example', label: 'XHR-GET-Example', href: 'xhrGetExample.html'},
	                    {id: 2, header: 'XHR POST Example', label: 'XHR-POST-Example', href: 'xhrPostExample.html'},
	                    {id: 3, header: 'Promise Chain Example', label: 'Promise-Chain-Example', href: 'promiseChainExample.html'},
	                    {id: 4, header: 'Defer Example', label: 'Defer-Example', href: 'deferExample.html'},
	                    {id: 5, header: 'Http Default Example', label: 'Http-Defaults-Example', href: 'httpDefaultsExample.html'},
	                    {id: 6, header: 'Interceptor Example', label: 'Interceptor-Example', href: 'interceptorExample.html'}
	                    ];
	
	self.submitExampleForm = function(form) {
		if(form.$valid) {
			log('Valid Form submitted...');
			self.displayPage = self.selectedXHRExample;
			log('Display Page: ', self.displayPage);
		} else {
			log('Invalid Form submitted..');
		}
	};
	
	function log(msg, obj) {
		$log.log(msg, obj);
	};
	
	
}]);