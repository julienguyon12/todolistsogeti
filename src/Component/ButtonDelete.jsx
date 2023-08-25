import React, { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import '../Style/ButtonDelete.scss';
import { AppContext } from '../App';

const ButtonDelete = ({ item }) => {
  const { todoList, setTodoList } = useContext(AppContext);

  const deleteTodoItem = () => {
    const updatedList = todoList.filter((task) => {
      return task.id !== item.id;
    });

    setTodoList(updatedList);
    localStorage.setItem('todoList', JSON.stringify(updatedList));
  };

  return (
    <button onClick={deleteTodoItem} className='button-delete'>
      <DeleteIcon />
    </button>
  );
};

export default ButtonDelete;
