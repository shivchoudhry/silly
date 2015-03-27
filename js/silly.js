var SILLY = (function(module) {
	module.Doit = function(resultobject) {
		resultobject.prepend(Date() + '<br/>');
	};


	return module;
}(SILLY || {})); 