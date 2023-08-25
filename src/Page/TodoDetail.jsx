import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../Style/TodoDetail.scss';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import TodoDetailForm from '../Component/TodoDetailForm';
import TodoDetailDesc from '../Component/TodoDetailDesc';
import { AppContext } from '../App';

const TodoDetail = () => {
  const { todoList, resetState, setShowForm } = useContext(AppContext);

  const [isCheck, setIsCheck] = useState(false);
  const [item, setItem] = useState();
  const idItem = parseInt(useParams().id);
  const navigate = useNavigate();

  useEffect(() => {
    resetState();
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

  const modifyForm = () => {
    setShowForm((prev) => !prev);
    resetState();
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
          <button onClick={modifyForm} className='edit-button'>
            <EditIcon sx={{ fontSize: 35 }} />
          </button>
        </div>
        <TodoDetailDesc item={item} />
        <TodoDetailForm
          item={item}
          idItem={idItem}
          setisCheck={setIsCheck}
          isCheck={isCheck}
          setItem={setItem}
        />
      </div>
    </div>
  );
};

export default TodoDetail;
