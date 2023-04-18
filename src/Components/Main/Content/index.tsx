// import { HTMLMainElement } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import style from './Content.module.scss';
import { Link } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';
import { Component } from 'Component';

export const Content = () => {
  const [timer, setTimer] = useState(0);
  const [color, setColor] = useState(style.black);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1); // увеличиваем таймер на 1 каждую секунду
      setColor((prevColor) => (prevColor === 'black' ? 'red' : 'black')); // переключаем между черным и красным цветом
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timer / 60); // при первом рендере компонента значение timer равно 0, и если мы попытаемся вычислить количество минут с помощью Math.floor(timer / 60), то получим 0. Однако, в useEffect мы устанавливаем интервал, который каждую секунду увеличивает значение timer на 1. То есть, после первой секунды timer будет равен 1, а при вычислении Math.floor(timer / 60) мы получим 0, так как это значение меньше единицы. Но после прохождения 60 секунд timer будет равен 60, и тогда при вычислении Math.floor(timer / 60) мы получим 1, то есть одну минуту. Далее, при увеличении timer до значения 61, мы получим 1 минуту и 1 секунду. Таким образом, функция Math.floor(timer / 60) вычисляет количество минут на основе текущего значения timer, которое увеличивается каждую секунду.
  const seconds = timer % 60; // Для вычисления количества секунд прошедших с момента старта таймера, мы используем остаток от деления значения timer на 60, то есть timer % 60. Например, если timer равен 61, то timer % 60 будет равен 1, то есть одной секунде.

  const styleChange = {
    timer: { color },
  };
  const Ref = useRef<any>(null);
  const changeBackground = () => {
    Ref.current.style.backgroundColor = 'grey'; // Функция для изменения фона на серый цвет при нажатии на кнопку
  };

  const changeBackgroundBack = () => {
    Ref.current.style.backgroundColor = 'white';
  };
  return (
    <main className={style.content} ref={Ref}>
      <p className={style.timer} style={styleChange.timer}>
        Вы на сайте уже: {minutes} мин. {seconds} сек.
      </p>
      <h1>MAIN CONTENT</h1>
      <button type="button" onClick={changeBackground}>
        Сменить фон
      </button>
      <button type="button" onClick={changeBackgroundBack}>
        Сменить фон обратно на белый
      </button>
      <div className={style.block}>
        <h1 className={style.block__text}>
          <span>Д</span>ля твоих тренировок:
        </h1>
        <Component title="Dumbbells" ImgSrc={'dumbbells.jpg'} />
        <Component title="Jump rope" ImgSrc={'middle.jpg'} />
        <Component title="Ball" ImgSrc={'ball.jpg'} />
        <Component title="Sandbag" ImgSrc={'Sandbag.jpg'} />
      </div>
      <Link className={style.content__Link} to={routes.posts}>
        Занятия
      </Link>
    </main>
  );
};
