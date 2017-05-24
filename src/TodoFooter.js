import React from 'react';
import * as FilterTypes from './filter-types';

export default class TodoFooter extends  React.Component{
	render(){
		return(
			<div className="row">
				<div className="col-xs-4 text-center">
					{
						this.props.activeTodoCount>0?
							<div style={{height:'30px',lineHeight:'30px'}}>
								<button className="btn btn-primary btn-sm" href="#" style={{textDecoration: 'none'}}>
									你有<span className="badge">{this.props.activeTodoCount}</span>件待办
								</button>
							</div>
							:null
					}
				</div>

				<div className="col-md-6 text-center">
					<button className={`btn btn-sm ${this.props.filterType===FilterTypes.ALL?'btn-success':'btn-default'}`} onClick={()=>this.props.changeFilterType(FilterTypes.ALL)}>全部</button>
					<button className={`btn btn-sm ${this.props.filterType===FilterTypes.ACTIVE?'btn-success':'btn-default'}`}  style={{marginLeft:5}} onClick={()=>this.props.changeFilterType(FilterTypes.ACTIVE)}>未完成</button>
					<button className={`btn btn-sm ${this.props.filterType===FilterTypes.COMPLETED?'btn-success':'btn-default'}`} style={{marginLeft:5}} onClick={()=>this.props.changeFilterType(FilterTypes.COMPLETED)}>已完成</button>
				</div>

				<div className="col-md-2">
					{
						this.props.completedTodoCount>0?
							<button className="btn btn-danger btn-sm" onClick={this.props.clearCompleted}>删除已完成</button>
							:null
					}
				</div>
			</div>
		)
	}
}