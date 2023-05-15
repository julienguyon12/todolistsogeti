import React, { useState } from 'react';
import '../Style/Home.scss';
import TodoForm from '../Component/TodoForm';
import Todo from '../Component/Todo';

const Home = () => {
  const [valueTitle, setValueTitle] = useState('');
  const [valueDescription, setValueDescription] = useState('');
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('todoList')) || []
  );

  const deleteTodoItem = (id) => {
    const updatedList = todoList.filter((task) => {
      return task.id !== id;
    });

    setTodoList(updatedList);
    localStorage.setItem('todoList', JSON.stringify(updatedList));
  };

  const createTodo = (e) => {
    e.preventDefault();

    const date = new Date();
    const dateFormated =
      date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

    const item = {
      id: date.getTime(),
      name: valueTitle,
      desc: valueDescription,
      achieved: false,
      progress: 0,
      creation: dateFormated,
    };

    //reset Form
    e.target.reset();

    setTodoList([...todoList, item]);
    localStorage.setItem('todoList', JSON.stringify([...todoList, item]));
  };

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
    <div className='Home'>
      <h1>Ma Todo List</h1>
      <TodoForm
        createTodo={createTodo}
        setValueTitle={setValueTitle}
        setValueDescription={setValueDescription}
      />
      <div className='todoList'>
        {todoList.map((item) => {
          return (
            <Todo
              item={item}
              deleteTodoItem={deleteTodoItem}
              updateCheckBox={updateCheckBox}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
