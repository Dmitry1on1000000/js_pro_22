import React, { ChangeEvent, useState } from 'react';
import style from './input.module.scss';
export const Input = () => {
  const [value, setValue] = useState('');
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className={style.input_wrapper}>
      <h1>TITLE</h1>
      <h2>{`INPUT VALUE ${value}`}</h2>
      <input value={value} onChange={ changeHandler} className={style.input} />
    </div>
  );
};
