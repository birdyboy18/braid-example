var React = require('react');
var Actions = require('../actions/actions.js');

var tag = React.createClass({
	render: function() {
		return (
			<span onClick={this.filterByTag}>{this.props.tag}</span>
		)
	},
	filterByTag: function() {
		Actions.filterVideos({tag: this.props.tag});
	}
});

module.exports = tag;