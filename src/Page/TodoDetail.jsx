import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Style/TodoDetail.scss';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import TodoDetailForm from '../Component/TodoDetailForm';
import TodoDetailDesc from '../Component/TodoDetailDesc';

const TodoDetail = () => {
  //Get the todoList from localstorage
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('todoList')) || []
  );
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [progress, setProgress] = useState('');
  const [showForm, setShowForm] = useState(false);
  const idItem = parseInt(useParams().id);

  //if idItem === undefined redirect homePage

  //Find the item matching the urlid
  const item = todoList.filter((task) => {
    return task.id === idItem;
  })[0];

  // if item.lenght === 0 redirect homePage or error 404

  const [isCheck, setIsCheck] = useState(item.achieved);

  const updateTodo = (e) => {
    e.preventDefault();
    const newItem = {
      id: idItem,
      name: title === '' ? item.name : title,
      desc: description === '' ? item.desc : description,
      achieved: isCheck,
      progress: progress === '' ? item.progress : progress,
      creation: item.creation,
    };
    const updatedList = todoList;
    const index = updatedList.findIndex((x) => x.id === idItem);
    updatedList[index] = newItem;

    setTodoList(updatedList);
    localStorage.setItem('todoList', JSON.stringify(updatedList));
    setShowForm((prev) => !prev);
  };

  return (
    <div className='todo-detail'>
      <div className={`todo-card${item.achieved ? ' green' : ''}`}>
        <div className='icons'>
          <Link to={`/`}>
            <CloseIcon sx={{ fontSize: 40 }} />
          </Link>
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className='edit-button'
          >
            <EditIcon sx={{ fontSize: 35 }} />
          </button>
        </div>
        <TodoDetailDesc item={item} />
        <TodoDetailForm
          updateTodo={updateTodo}
          item={item}
          idItem={idItem}
          showForm={showForm}
          setShowForm={setShowForm}
          setDescription={setDescription}
          setTitle={setTitle}
          setProgress={setProgress}
          setisCheck={setIsCheck}
          isCheck={isCheck}
        />
      </div>
    </div>
  );
};

export default TodoDetail;
