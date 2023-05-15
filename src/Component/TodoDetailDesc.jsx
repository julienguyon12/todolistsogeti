import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../Style/TodoDetailDesc.scss';
import ProgressBar from './ProgressBar';

const TodoDetailDesc = ({ item }) => {
  return (
    <div className='todo-desc'>
      <div className='left'>
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
      </div>
      <div className='right'>
        <div className='wrap'>
          <p>{item.achieved === true ? 'Tâche terminée' : 'Tâche en cours'}</p>
          <div>
            {item.achieved === true ? (
              <div className='validate-icon'>
                <CheckCircleIcon sx={{ fontSize: 40 }} />
              </div>
            ) : (
              <ProgressBar item={item} />
            )}
          </div>
          <p className='date'>Date de creation: {item.creation}</p>
        </div>
      </div>
    </div>
  );
};

export default TodoDetailDesc;
