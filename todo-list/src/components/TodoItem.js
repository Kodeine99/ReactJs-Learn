import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './TodoItem.css';
import checkItem from '../img/check.svg';
import checkedItem from '../img/check-complete.svg';

class TodoItem extends Component {
  render() {
    const { item, onClick, onDeleteItem } = this.props;
    // console.log(onDeleteItem)
    let url = checkItem;
    if (item.isComplete) {
      url = checkedItem;
    }
    return (
      <div  className={classNames('TodoItem', {
        'TodoItem-completed': item.isComplete
        })
      }>
        <img onClick={onClick} src={url} width={32} alt='' />
        <p> {item.title}</p>
        <button className="destroy" onClick={() => onDeleteItem(item)}></button>
      </div>
      
    );
  };  
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    isComplete: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func
}
export default TodoItem;
