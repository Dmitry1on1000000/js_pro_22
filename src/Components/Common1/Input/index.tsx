import React, { ChangeEvent } from 'react';
import style from './input.module.scss';

type inputProps = {
  name: string;
  value: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};
export const Input = ({ changeHandler, value, name, type = 'text' }: inputProps) => {
  return (
    <div className={style.wrapper}>
      <span>{name}</span>
      <input value={value} onChange={changeHandler} type={type} />
    </div>
  );
};
