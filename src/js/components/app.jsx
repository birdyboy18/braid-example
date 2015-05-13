var React = require('react');
var Reflux = require('reflux');

//components
var VideoList = require('./videoList.jsx');
var Videotags = require('./videotags.jsx');
var TagForm = require('./tagForm.jsx');

var Actions = require('../actions/actions.js');


//Store
var videoStore = require('../stores/videoStore.js');
var tagsStore = require('../stores/tagsStore.js');

var App = React.createClass({
	mixins:[Reflux.ListenerMixin],
	componentDidMount: function() {
		this.listenTo(videoStore, '_handleUpdateVideos');
		this.listenTo(tagsStore, '_handleUpdateTags');
	},
	getInitialState: function() {
		return {
			videos: [],
			tags: []
		}
	},
	render: function() {
		return (
			<div className="container">
				<div className="tags">
					<h3>Filter by clicking on either of the following tags</h3>
					<Videotags tags={this.state.tags} />
					<span className="button" onClick={this._clearFilter}>Clear Filter</span>
				</div>
				<div className="input-wrap">
					<h3>Provide a video id and a tag you want to use and watch it update that video.</h3>
					<TagForm />
				</div>
				<div className="video-wrap">
					<VideoList videos={this.state.videos} />
				</div>
				<div className="filter-list">

				</div>
			</div>
		)
	},
	_handleUpdateVideos: function(videos){
		this.setState({
			videos: videos
		});
	},
	_handleUpdateTags: function(tags){
		this.setState({
			tags: tags
		});
	},
	_clearFilter: function() {
		Actions.filterVideos({tag: null});
	}
});

module.exports = App;