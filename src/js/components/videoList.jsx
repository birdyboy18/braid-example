var React = require('react');

var Video = require('./video.jsx');

var videoList = React.createClass({
	render: function() {
		var videos = this.props.videos.map(function(video){
			return <Video key={video._id} id={video._id} video={video} />
		});
		return (
			<div className='video-list'>
				{videos}
			</div>
		)
	}
});

module.exports = videoList;