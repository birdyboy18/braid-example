var Reflux = require('reflux');

var actions = Reflux.createActions([
	'addTag',
	'filterVideos',
	'clearFilters'
]);

module.exports = actions;