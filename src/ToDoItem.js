import React from 'react';

export default class ToDoItem extends React.Component {
	render() {
		let todo = this.props.todo;
		return (
			<li className="list-group-item">
				{/*.row>.col-md-1+.col-md-10+.col-md-1*/}
				<div className="row">
					<div className="col-md-1">
						<input type="checkbox" checked={todo.completed} onChange={() => this.props.toggle(todo.id)}/>
					</div>
					<div className="col-md-10" style={{textDecoration: todo.completed ? 'line-through' : ''}}>
						{todo.title}
					</div>
					<div className="col-md-1">
						<button className="btn btn-danger btn-xs" onClick={()=>this.props.remove(todo.id)}>&times;</button>
					</div>
				</div>
			</li>
		);
	}
}