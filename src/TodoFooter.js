import React from 'react';
import * as FilterTypes from './filter-types';

export default class TodoFooter extends  React.Component{
	render(){
		return(
			<div className="row">
				<div className="col-md-4">
					您还有{this.props.activeTodoCount}件代办事件
				</div>

				<div className="col-md-6 text-center">
					<button className={`btn btn-sm ${this.props.filterType==FilterTypes.ALL?'btn-success':'btn-default'}`} onClick={()=>this.props.changeFilterType(FilterTypes.ALL)}>全部</button>
					<button className={`btn btn-sm ${this.props.filterType==FilterTypes.ACTIVE?'btn-success':'btn-default'}`}  style={{marginLeft:8}} onClick={()=>this.props.changeFilterType(FilterTypes.ACTIVE)}>未完成</button>
					<button className={`btn btn-sm ${this.props.filterType==FilterTypes.COMPLETED?'btn-success':'btn-default'}`} style={{marginLeft:8}} onClick={()=>this.props.changeFilterType(FilterTypes.COMPLETED)}>已完成</button>
				</div>

				<div className="col-md-2">

				</div>
			</div>
		)
	}
}