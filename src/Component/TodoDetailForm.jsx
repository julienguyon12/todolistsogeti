import React from 'react';
import '../Style/TodoDetailForm.scss';
import CheckBox from './CheckBox';

const TodoDetailForm = ({
  updateTodo,
  item,
  idItem,
  showForm,
  setShowForm,
  setTitle,
  setDescription,
  setProgress,
  setisCheck,
  isCheck,
}) => {
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
          <input
            type='text'
            placeholder={item.desc}
            onChange={(e) => setDescription(e.target.value)}
            className='desc'
          ></input>
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
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowForm((prev) => !prev);
          }}
          className='cancel'
        >
          Annuler
        </button>
        <button type='submit'>Valider</button>
      </div>
    </form>
  );
};

export default TodoDetailForm;
