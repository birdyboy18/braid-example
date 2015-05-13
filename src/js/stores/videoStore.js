var Reflux = require('reflux');
var request = require('superagent');
var delivery = require('superagent-prefix')('http://api.getbraid.io/api/delivery/v1');

//stores
var tagsStore = require('./tagsStore.js');

var Actions = require('../actions/actions.js');

var videoStore = Reflux.createStore({
	init: function() {
		var self = this;
		this._videos = [];
		
		request
		.get('/entries')
		.use(delivery)
		.set('Accept', 'application/json')
		.query({threadId: '55528c2e3ca4ed3c3892f298'})
		.query({ limit: 20 })
		.end(function(err, res){
			if (res.ok) {
				self._videos = res.body;
				self.trigger(self._videos);
			}
		});
		this.listenTo(tagsStore, '_fetchVideos');
		this.listenTo(Actions.filterVideos, '_filterVideos');

	},
	_getVideos: function() {
		return this._videos;
	},
	_fetchVideos: function(data) {
		var self = this;
		
		request
		.get('/entries')
		.use(delivery)
		.set('Accept', 'application/json')
		.query({threadId: '55528c2e3ca4ed3c3892f298'})
		.query({ limit: 20 })
		.end(function(err, res){
			if (res.ok) {
				self._videos = res.body;
				self.trigger(self._videos);
			}
		});
	},
	_filterVideos: function(data) {
		var self = this;
		var url;
		if (data.tag) {
			var url = '/entries/tags/' + data.tag;
		} else {
			var url = '/entries';
		}
		
		request
		.get(url)
		.use(delivery)
		.set('Accept', 'application/json')
		.query({threadId: '55528c2e3ca4ed3c3892f298'})
		.query({ limit: 20 })
		.end(function(err, res){
			if (res.ok) {
				self._videos = res.body;
				self.trigger(self._videos);
			}
		});
	}
});

module.exports = videoStore;