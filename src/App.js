import React from 'react';
import logo from './logo.svg';
import './App.css';

class ListManager extends React.Component {
	constructor(props) {
		super(props);
		this.tasks = [
			{name: 'this is done', done: false},
			{name: 'this is not', done: true}
		];
		this.state = {
			items: this.tasks
		}
	}

	addItem = (task_name) => {
		this.tasks.unshift({name: task_name, done: false});
		this.setState({items: this.tasks});

	}

	delItem = (item_index) => {
		this.tasks.splice(item_index, 1);
        this.setState({items: this.tasks});
	}

	render() {
		return(
			<div>
				<h1>To Do</h1>
				<AddTask add= {this.addItem} />
				<ShowList list={this.state.items} del={this.delItem} />
			</div>
		);
	}
}

class AddTask extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.add(this.refs.item_name.value);
		this.refs.item_name.value = "";
	}

	render() {
		return (
			<form onSubmit= {this.handleSubmit}>
				<input type= "text" ref= "item_name" />
				<button type= "submit"><i class="fas fa-arrow-alt-circle-right"></i></button>
			</form>
		);
	}
}

class ShowList extends React.Component {
	render() {
		let listset = this.props.list.map(
			(item, index) => {
				return(
					<li>
					<span>{item.name}</span>
					<span className="col-md-1" onClick={() => {this.props.del(index);}}><i className="fas fa-times"></i></span>
				</li>
				)
			}
		)
		
		return(
			<ul>{listset}</ul>
		);
	}
}

class ToDoApp extends React.Component {
	render(){
		return <ListManager />;
	}
}

export default ToDoApp;