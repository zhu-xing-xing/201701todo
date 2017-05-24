export default class ToDoModel{
	constructor(){
		//向localstorage里面写入的时候,需要这个key
		this.STORE_KEY = 'todos';
		this.todos = localStorage.getItem(this.STORE_KEY)?JSON.parse(localStorage.getItem(this.STORE_KEY)):[]; //存放着所有的todos  先检查一下浏览器存储里面有没有,如果有传入todos;如果没有,给一个空数组
		this.listeners = []; //这里可以注册监听器,当模型数据发生变化后,会调用这些监听函数
	}

	//订阅on(type,listeners)
	subscribe(listener){
		this.listeners.push(listener);
	}

	emit(){
		this.listeners.forEach(listener=>listener());
	}

	//增加todo
	addTodo = (todo) => {
		todo = Object.assign({}, {id: Math.random(), completed: false}, todo);//es5
		let todos = this.todos;
		todos.push(todo);
		localStorage.setItem(this.STORE_KEY,JSON.stringify(todos)); //把todos放进浏览器存储
		this.emit();
	};
}