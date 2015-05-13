var React = require('react');

var Tag = require('./tag.jsx');

var videoTags = React.createClass({
	render: function() {
		var tags = this.props.tags.map(function(tag){
			return <Tag tag={tag} />
		});
		return (
			<div>
				{tags}
			</div>
		)
	}
});

module.exports = videoTags;