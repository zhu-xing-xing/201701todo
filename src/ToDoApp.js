import React from 'react';
import ReactDOM from 'react-dom';
import ToDoHeader from './ToDoHeader';
import ToDoBody from './ToDoBody';
import ToDoItem from './ToDoItem';
import TodoFooter from './TodoFooter';
import * as filterTypes from './filter-types';  //把所有变量变成一个对象导入进来

export default class ToDoApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {  //初始化默认状态
			todos: [],
			filterTypes: filterTypes.ALL
		}
	}


	toggle = (id) => {
		let todos = this.state.todos;
		todos = todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		this.setState({todos});
	};

	remove = (id) => {
		let todos = this.state.todos;
		let index = todos.findIndex(todo => todo.id === id);
		todos.splice(index, 1);
		this.setState({todos});
	};

	addTodo = (todo) => {
		/*  todo = Object.assign(todo,{id:Date.now(),completed:false},todo);  //es5
		 todo = {id:Date.now(),completed:false,...todo};//es7 不支持*/
		todo = Object.assign({}, {id: Math.random(), completed: false}, todo);//es5
		let todos = this.state.todos;
		todos.push(todo);
		this.setState({todos});
	};

	toggleAll = (event) => {
		let todos = this.state.todos;
		let flag = event.target.checked;
		todos = todos.map(todo => {
			todo.completed = flag;
			return todo;
		});
		this.setState({todos});
	};

	changeFilterType=(filterTypes)=>{
		this.setState({filterTypes});
	};

	clearCompleted = () => {
		let todos = this.state.todos;
		todos = todos.filter(todo => !todo.completed);
		this.setState({todos});
	};

	render() {
		let todos = this.state.todos;
		let activeTodoCount = todos.reduce((count, todo) => count + (todo.completed ? 0 : 1), 0);
		let completedTodoCount = todos.length - activeTodoCount;

		//进行过滤
		let showTodos = todos.filter((todo) => {
			switch (this.state.filterTypes) {
				case filterTypes.ACTIVE:
					return !todo.completed;
				case filterTypes.COMPLETED:
					return todo.completed;
				default:
					return true;
			}
		});


		let main = (
			<ul className="list-group">
				{
					todos.length > 0 ?
						<li className="list-group-item">
							<input type="checkbox" checked={activeTodoCount === 0} onChange={this.toggleAll}/>
							{activeTodoCount === 0 ? '全部取消' : '全部选中'}
						</li>
						: null
				}

				{
					showTodos.map((todo, index) =>
						<ToDoItem remove={this.remove} toggle={this.toggle} todo={todo} key={index}></ToDoItem>)
				}
			</ul>
		);

		return (
			<div className="container" style={{marginTop: 20}}>
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<div className="panel panel-default">

							<div className="panel-heading">
								<ToDoHeader addTodo={this.addTodo}/>
							</div>

							<div className="panel-body">
								{main}
							</div>

							<div className="panel-footer">
								<TodoFooter activeTodoCount={activeTodoCount} changeFilterType={this.changeFilterType} filterType={this.state.filterTypes} clearCompleted={this.clearCompleted}  completedTodoCount = {completedTodoCount}/>
							</div>

						</div>
					</div>
				</div>
			</div>
		);
	}
}