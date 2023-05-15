import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import '../Style/ButtonDelete.scss';
const ButtonDelete = ({ deleteTodoItem, item }) => {
  return (
    <button onClick={() => deleteTodoItem(item.id)} className='button-delete'>
      <DeleteIcon />
    </button>
  );
};

export default ButtonDelete;
