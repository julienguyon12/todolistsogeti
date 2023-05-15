import React from 'react';
import '../Style/CheckBox.scss';

const CheckBox = ({ label, id, checked, updateCheckBox, param }) => {
  return (
    <label className='check-box'>
      {label}
      <input
        type='checkbox'
        id={id}
        checked={checked}
        onChange={() => updateCheckBox(param)}
      />
      <span className='checkmark' />
    </label>
  );
};

export default CheckBox;
