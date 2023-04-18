import React, { useState } from 'react';
import style from './indexWrapper.module.scss';

type CounterPropsType = {
  title: string;
  count?: number;
  ImgSrc?: string;
};

export const Component = (props: CounterPropsType) => {
  const { title } = props;
  const { ImgSrc } = props;
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };
  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className={style.indexWrapper}>
      <div className={style.Cart}>
        <h1>{title}</h1>
        <button className={style.addToCart} onClick={() => alert('Товар добавлен в корзину!')}>
          Добавить в корзину
        </button>
      </div>
      <div className={style.counterWrapper}>
        {/* <img className={style.img} src={'dumbbells.jpg'} /> */}
        <img className={style.img} src={ImgSrc} />
        <button disabled={count === 0} onClick={decrementHandler}>
          Remove
        </button>
        <h2> {count} </h2>
        <button onClick={incrementHandler}>Add</button>
      </div>
    </div>
  );
};
