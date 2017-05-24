import React from 'react';
const ENTER_KEY = 13;

export default class ToDoHeader extends React.Component {

	handleKeyDown = (event) => {
		if (event.keyCode === ENTER_KEY && event.target.value != null && event.target.value.length > 0) {
			let title = event.target.value;
			this.props.addTodo({title});
			event.target.value = '';
		}
	};


	render() {
		return (
			<div className="form-group">
				<input onKeyDown={this.handleKeyDown} className="form-control" type="text" autoFocus={true} placeholder="请输入要办的事情"/>
			</div>
		);
	}
}