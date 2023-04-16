import React from 'react';
import style from './Content.module.scss';
import { Link } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';
import { Component } from 'Component';

export const Content = () => {
  return (
    <main className={style.content}>
      <h1>MAIN CONTENT</h1>
      <div className={style.block}>
        <h1 className={style.block__text}><span>Д</span>ля твоих тренировок: </h1>
        <Component title="Dumbbells" ImgSrc={'dumbbells.jpg'} />
        <Component title="Jump rope" ImgSrc={'middle.jpg'} />
        <Component title="Ball" ImgSrc={'ball.jpg'} />
        <Component title="Sandbag" ImgSrc={'Sandbag.jpg'} />
      </div>
      <Link className={style.content__Link} to={routes.posts}>Занятия </Link>
    </main>
  );
};
