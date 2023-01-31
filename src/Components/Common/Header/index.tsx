import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserSelectors, UserSliceActions } from 'Store';
import style from './Header.module.scss';

export const Header = () => {
  const userEmail = useSelector(UserSelectors.getUserEmail);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(UserSliceActions.clearUserData());
  };

  return (
    <header className={style.wrapper}>
      <img className={style.wrapper_logo} src="/logo.png" />
      <nav className={style.wrapper_nav}>
        <ul>
          <li>
            <Link to={routes.main}>ГЛАВНАЯ</Link>
          </li>
          <li>
            <Link to={routes.posts}>ПОСТЫ</Link>
          </li>
          <li>
            <Link to={routes.about}>О НАС</Link>
          </li>
        </ul>
      </nav>

      {userEmail ? (
        <div>
          <span className={style.name}>{userEmail}</span>
          <button type="button" onClick={logoutHandler}>
            logout
          </button>
        </div>
      ) : (
        <Link to={routes.auth}>AUTH</Link>
      )}
    </header>
  );
};
