import React, {Component} from 'react';
import './App.css';
import './components/FontAwesomeIcons/FontAwesomeIcon';
// import './Css/style.css'
import TodoItem from './components/TodoItem';
// get our fontawesome imports
import checkAll from './img/checkall.svg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      todoItems:
      [
          { title: 'Learn English', isComplete: false },
          { title: 'Learn ReactJs', isComplete: true },
          { title: 'Learn JavaScript', isComplete: false }
      ]
    }
    this.onItemClick = this.onItemClick.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.showActiveItem = this.showActiveItem.bind(this);
    this.showCompletedItem = this.showCompletedItem.bind(this);
    this.clearList = this.clearList.bind(this);
  }
  onItemClick(item) {
    return (event) => {
      const isComplete  = item.isComplete;
      const { todoItems } = this.state;
      const itemIndex = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, itemIndex),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(itemIndex + 1)
        ]
      })
    }
  }
  onKeyUp(event) {
    if (event.keyCode === 13) {
      let text = event.target.value;
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) { return; }

      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems
        ]
      });
    }
  }
  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }
  deleteItem = (item) => {
    let index = this.state.todoItems.indexOf(item);
    this.state.todoItems.splice(index,1)
    this.setState({
      todoItems: this.state.todoItems
    })
  } 
  getNumberOfItems = () => {
    let numberOfItem = this.state.todoItems.length;
    if (this.state.todoItems.isComplete) {
      numberOfItem -= 1;
    }
    return numberOfItem;
  }
  allCompleted(event) {
    let { todoItems } = this.state;
    console.log(event);
    todoItems.forEach(todoItem => {
      if (todoItem.value === event.target.value) {
        todoItem.isComplete = true
      }
      else {
        todoItem.isComplete = false
      }
    })
    this.setState({ todoItems: todoItems });
  }
  showAllItems() {
    let { todoItems } = this.state;
    this.setState({
      todoItems: todoItems
    });
  }
  showActiveItem() {
    let { todoItems } = this.state;
    let activeTodo = todoItems.filter(todoItem => todoItem.isComplete === false)
    this.setState({
      todoItems: activeTodo
    })
  }
  showCompletedItem() {
    let { todoItems } = this.state;
    let completedTodo = todoItems.filter(todoItem => todoItem.isComplete === true)
    this.setState({
      todoItems: completedTodo
    })
  }
  clearList() {
    this.setState({
      todoItems: []
    })
  }
  render() {
    const { newItem } = this.state;
    return (
      <div className="App">
        <h1>Kodeine's Todos</h1>
        <div className="Header">
          <img onClick={(event) => this.allCompleted(event)} src={checkAll} width={32} alt=""></img>
          <input
            className="new-todo" type="text" placeholder="What needs to be done ?"
            onKeyUp={this.onKeyUp} value={newItem} onChange={this.onChange}>
          </input> 
        </div>
        <section className="main">
        {
          this.state.todoItems.length > 0 &&
          this.state.todoItems.map((item, index) =>
            <TodoItem key={index} item={item} onClick={this.onItemClick(item)} onDeleteItem={() => this.deleteItem(item)}/>)
        }
        { this.state.todoItems.length === 0 && 'Nothing here'}
        </section>
        <footer className="footer">
          <span> {this.getNumberOfItems()} item left</span>
          <ul className="filters" >
            <li><a onClick={this.showAllItems} href="#All">All</a></li>
            <li><a onClick={this.showActiveItem} href="#Active">Active</a></li>
            <li><a onClick={this.showCompletedItem} href="#Complete">Completed</a></li>
            <li><a onClick={this.clearList} href="#Clear" className="clearList">Clear list</a></li>
          </ul>
        </footer>
     </div>
    );
  }
}


export default App;
