import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../Style/TodoDetail.scss';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import TodoDetailForm from '../Component/TodoDetailForm';
import TodoDetailDesc from '../Component/TodoDetailDesc';

const TodoDetail = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('todoList')) || []
  );
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [progress, setProgress] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [item, setItem] = useState();
  const idItem = parseInt(useParams().id);
  const navigate = useNavigate();
  useEffect(() => {
    const items = todoList.filter((task) => {
      return task.id === idItem;
    });
    if (items.length === 0) {
      navigate('/NotFound');
    } else {
      setItem(items[0]);
      setIsCheck(items[0].achieved);
    }
  }, []);

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

    setItem(newItem);
    setTodoList(updatedList);
    localStorage.setItem('todoList', JSON.stringify(updatedList));
    setShowForm((prev) => !prev);
  };

  if (item === undefined) {
    return null;
  }
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
