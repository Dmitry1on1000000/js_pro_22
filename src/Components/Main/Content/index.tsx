import React from 'react';
import style from './Content.module.scss';
import { Link } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';

export const Content = () => {
  return (
    <main className={style.content}>
      <h1>MAIN CONTENT</h1>
      <Link to={routes.posts}>go to posts</Link>
    </main>
  );
};
