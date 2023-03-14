import React from 'react';
import style from './Header.module.scss';
export const Header = () => {
  return (
    <header className={style.header}>
      <span className={style.header__logo}>LOGO</span>
      <span className={style.header__title}>App_NAME</span>
    </header>
  );
};
