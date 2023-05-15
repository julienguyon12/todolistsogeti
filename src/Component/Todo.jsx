import React from 'react';
import '../Style/Todo.scss';
import { Link } from 'react-router-dom';
import ButtonDelete from './ButtonDelete';
import CheckBox from './CheckBox';

const Todo = ({ item, deleteTodoItem, updateCheckBox }) => {
  return (
    <div className={`todo${item.achieved ? ' completed' : ''}`} key={item.id}>
      <Link to={{ pathname: `/todo/${item.id}` }}>
        <h3> {item.name}</h3>
      </Link>
      <div className='right'>
        <CheckBox
          label={''}
          id={item.id}
          checked={item.achieved}
          updateCheckBox={updateCheckBox}
          param={item.id}
        />
        <ButtonDelete deleteTodoItem={deleteTodoItem} item={item} />
      </div>
    </div>
  );
};

export default Todo;
