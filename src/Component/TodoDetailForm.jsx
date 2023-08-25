import React, { useContext } from 'react';
import '../Style/TodoDetailForm.scss';
import CheckBox from './CheckBox';
import { AppContext } from '../App';

const TodoDetailForm = ({ item, idItem, setisCheck, isCheck, setItem }) => {
  const {
    todoList,
    setTodoList,
    title,
    setTitle,
    setDescription,
    description,
    progress,
    setProgress,
    resetState,
    showForm,
    setShowForm,
  } = useContext(AppContext);

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
    resetState();
    e.target.reset();
  };

  const cancelEdit = (e) => {
    e.preventDefault();
    resetState();
    setShowForm((prev) => !prev);
  };
  return (
    <form
      className={`todo-detail-form${showForm ? ' on' : ''}`}
      onSubmit={updateTodo}
    >
      <h2>Modifier Votre Tâche</h2>
      <div className='container'>
        <div className='left'>
          <input
            type='text'
            placeholder={item.name}
            onChange={(e) => setTitle(e.target.value)}
            className='title'
          ></input>
          <textarea
            type='text'
            placeholder={item.desc}
            onChange={(e) => setDescription(e.target.value)}
            className='desc'
          ></textarea>
        </div>
        <div className='right'>
          <CheckBox
            label='Tâche terminée'
            id={idItem}
            checked={isCheck}
            updateCheckBox={setisCheck}
            param={(prev) => !prev}
          />
          {isCheck === false && (
            <div className='progress'>
              <label>Avancement projet %</label>
              <input
                type='number'
                min='0'
                max='100'
                placeholder={item.progress}
                onChange={(e) => setProgress(e.target.value)}
                className='progress-input'
              ></input>
            </div>
          )}
        </div>
      </div>
      <div className='bottom'>
        <button onClick={cancelEdit} className='cancel'>
          Annuler
        </button>
        <button type='submit'>Valider</button>
      </div>
    </form>
  );
};

export default TodoDetailForm;
