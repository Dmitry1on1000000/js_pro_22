import React, { useState } from 'react';
import style from './indexWrapper.module.scss';

type CounterPropsType = {
  title: string;
  count?: number;
};

export const Component = (props: CounterPropsType) => {
  const { title } = props;
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };
  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className={style.indexWrapper}>
      <h1>{title}</h1>
      <div className={style.counterWrapper}>
        <img className={style.img} src={'dumbbells.jpg'}/>
        <button disabled={count === 0} onClick={decrementHandler}>
          Remove
        </button>
        <h2> {count} </h2>
        <button onClick={incrementHandler}>Add</button>
      </div>
    </div>
  );
};
