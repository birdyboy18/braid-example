var React = require('react');

var Actions = require('../actions/actions.js');

var video = React.createClass({
	render: function() {
		var tags = this.props.video.modifiers.tags.terms.map(function(term){
			return <span onClick={this.filterByTag} >{term}</span>
		})
		return (
			<div className="video">
				<div className="thumbnail">
					<img src={this.props.video.data.thumbnails.standard.url}/>
				</div>
				<div className="videoDetails">
					<p className="videoTitle">{this.props.video.data.title}</p>
					<p className="id">_id: {this.props.video._id}</p>
					<p className="tags">Tags: {tags}</p>
				</div>
			</div>
		)
	},
	filterByTag: function() {
		Actions.filterVideos({tag: this.props.tag});
	}
});

module.exports = video;