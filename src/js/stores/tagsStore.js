var Reflux = require('reflux');
var request = require('superagent');
var delivery = require('superagent-prefix')('http://api.getbraid.io/api/delivery/v1');
var management = require('superagent-prefix')('http://getbraid.io/api/management/v1');

var Actions = require('../actions/actions.js');

var videoStore = Reflux.createStore({
	init: function() {
		var self = this;
		this._tags = [];
		
		request
		.get('/modifier/55528ccc3ca4ed3c3892f2cb')
		.use(delivery)
		.set('Accept', 'application/json')
		.end(function(err, res){
			if (res.ok) {
				self._tags = res.body.modifier_meta.terms;
				self.trigger(self._tags);
			}
		});

		this.listenTo(Actions.addTag, '_handleAddTag');

	},
	_returnTags: function() {
		return this._tags;
	},
	_fetchTags: function() {
		var self = this;
		
		request
		.get('/modifier/55528ccc3ca4ed3c3892f2cb')
		.use(delivery)
		.set('Accept', 'application/json')
		.end(function(err, res){
			if (res.ok) {
				self._tags = res.body.modifier_meta.terms;
				self.trigger(self._tags);
			}
		});
	},
	_handleAddTag: function(data) {
		var self = this;
		var url = '/entries/' + data.entry;
		var tag = {
			modifier_slug: 'tags',
			modifier_term: data.tag
		}
		request
		.put(url)
		.auth('demo','password')
		.use(management)
		.set('Content-Type', 'application/json')
		.send(tag)
		.end(function(err, res){
			if (res.ok) {
				self._fetchTags;
			}
		});
	}
});

module.exports = videoStore;