var React = require('react');

var Actions = require('../actions/actions.js');

var tagForm = React.createClass({
	render: function() {
		return (
			<div className="tag-form">
				<div className="input-group">
					<label>_id: </label>
					<input ref='entryInput' />
				</div>
				<div className="input-group">
					<label>Tag: </label>
					<input ref='tagInput' />
				</div>
				<span className="button" onClick={this._addTag}>Add Tag</span>
			</div>
		)
	},
	_addTag: function(){
		var entry = React.findDOMNode(this.refs.entryInput).value;
		var tag = React.findDOMNode(this.refs.tagInput).value;
		Actions.addTag({ entry: entry, tag: tag});
		React.findDOMNode(this.refs.entryInput).value = '';
		React.findDOMNode(this.refs.tagInput).value = ''
	}
});

module.exports = tagForm;