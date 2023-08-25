import React, { useContext } from 'react';
import '../Style/TodoForm.scss';
import AddIcon from '@mui/icons-material/Add';
import { AppContext } from '../App';

const TodoForm = () => {
  const {
    todoList,
    setTodoList,
    title,
    setTitle,
    description,
    setDescription,
    resetState,
  } = useContext(AppContext);

  const createTodo = (e) => {
    e.preventDefault();

    const date = new Date();
    const dateFormated =
      date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

    const item = {
      id: date.getTime(),
      name: title,
      desc: description,
      achieved: false,
      progress: 0,
      creation: dateFormated,
    };

    e.target.reset();
    resetState();

    setTodoList([...todoList, item]);
    localStorage.setItem('todoList', JSON.stringify([...todoList, item]));
  };

  return (
    <form className='todo-form' onSubmit={createTodo}>
      <div className='left'>
        <input
          type='text'
          required
          placeholder='Titre'
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <textarea
          placeholder='Description'
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className='right'>
        <button type='submit'>
          <AddIcon sx={{ fontSize: 40 }} />
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
