import React from 'react';
import ReactDOM from 'react-dom';

import ToDoApp from './ToDoApp';
import 'bootstrap/dist/css/bootstrap.css';
import ToDoModel from './ToDoModel';

let model = new ToDoModel();
function render(){
	ReactDOM.render(<ToDoApp model={model}/>,document.querySelector("#root"));
}

model.subscribe(render);
render();
