import React from 'react';
import '../Style/Progressbar.scss';

const ProgressBar = ({ item }) => {
  return (
    <div className='progress-container'>
      <div
        className='progress-bar'
        style={{ '--value': `${item.progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
