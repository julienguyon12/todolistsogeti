import React from 'react';
import '../Style/TodoForm.scss';
import AddIcon from '@mui/icons-material/Add';

const TodoForm = ({ setValueTitle, setValueDescription, createTodo }) => {
  return (
    <form className='todo-form' onSubmit={createTodo}>
      <div className='left'>
        <input
          type='text'
          required
          placeholder='Titre'
          onChange={(e) => setValueTitle(e.target.value)}
        ></input>
        <textarea
          placeholder='Description'
          onChange={(e) => setValueDescription(e.target.value)}
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
