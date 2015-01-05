$ = require('jquery');
_ = require('underscore');

module.exports = {
	resolveDummyPromiseAsync: function() {
		var deferred = $.Deferred();
		var args = arguments;
		setTimeout(function() {
			deferred.resolve.call(deferred, _(args).first());
		}, 0);
		return deferred.promise();
	},
	rejectDummyPromiseAsync: function() {
		var deferred = $.Deferred();
		var args = arguments;
		setTimeout(function() {
			deferred.reject.call(deferred, _(args).first());
		}, 0);
		return deferred.promise();
	},
	runsAndWaitsFor: function(fn) {
		var running;
		var deferred = $.Deferred();
		runs(function() {
			running = $.when(fn())
				.then(deferred.resolve, deferred.reject);
		});
		waitsFor(function() {
			return running.state() !== 'pending';
		}, 'promise to exit pending state', 500);
		return deferred.promise();
	}
};
