import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ListEntry } from './ListEntry.js'


class ToDoList extends React.Component {

 constructor(props){
    super(props);
        this.state = {
        listItems:["Example task 1","Example task 2"],
        value:''
        };
        this.addItems = this.addItems.bind(this);
        this.updateChange = this.updateChange.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItems(){
        const newTask = this.state.value;
        if(newTask == ''){
            alert("You must enter a task");
            return false
        }
        this.setState(prevState => ({
            value: '',
            listItems: [...prevState.listItems, newTask]
        })
        );
        this._inputElement.value = '';
    }

    getList(){
        const myList = this.state.listItems.map((listItem,i) =>
        <ListEntry handleClick={this.removeItem} key={i} description={listItem}/>
        );

        return myList;
    }

    updateChange(e){
        let newValue = e.target.value;
        this.setState({value:newValue});
    }

    removeItem(item){
        this.setState({
        listItems: this.state.listItems.filter(el => el!== item)
         });
    }

    render(){
        let showValue = (
            this.state.value == '' ? <p>Use the input field above to add another task.</p> : <p>Add task: {this.state.value}</p>
        );

        return (

            <div className="list-holder">
            <h1> To Do List </h1>
            <ul>{this.getList()}</ul>
            <input ref={(a) => this._inputElement = a} type="text" placeholer="Add task" onChange={this.updateChange} />
            {showValue}
            <button onClick={this.addItems}>Add Task To List</button>
            <p>Click on a task to remove it from the list.</p>
            </div>
        )
    }
}

ReactDOM.render(
  <ToDoList />,
  document.getElementById('container')
);

