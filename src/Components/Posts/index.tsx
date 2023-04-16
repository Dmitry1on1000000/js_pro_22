import React from 'react';
import style from './PostsList.module.scss';
import { Link } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';

export const PostsList = () => {
  return (
    <main className={style.wrapper}>
      <h1>Posts</h1>
      <p>Post1</p>
      <p>Post2</p>
      <p>Post3</p>
      <p>Post4</p>
      <p>Post5</p>
      <p>Post6</p>
      <p>Post7</p>
      <Link className={style.wrapper__Link} to={routes.main}>go to main</Link>
    </main>
  );
};
