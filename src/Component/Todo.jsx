import React, { useContext } from 'react';
import '../Style/Todo.scss';
import { Link } from 'react-router-dom';
import ButtonDelete from './ButtonDelete';
import CheckBox from './CheckBox';
import { AppContext } from '../App';

const Todo = ({ item }) => {
  const { todoList, setTodoList } = useContext(AppContext);

  const updateCheckBox = (id) => {
    const updatedList = todoList.map((task) => {
      if (task.id === id) {
        return { ...task, achieved: !task.achieved };
      }
      return task;
    });

    setTodoList(updatedList);
    localStorage.setItem('todoList', JSON.stringify(updatedList));
  };
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
        <ButtonDelete item={item} />
      </div>
    </div>
  );
};

export default Todo;
