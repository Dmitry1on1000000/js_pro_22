import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserSelectors } from 'Store';
import style from './Header.module.scss';
export const Header = () => {
  const userEmail = useSelector(UserSelectors.getUserEmail);
  return (
    <header className={style.header}>
      <span className={style.header__logo}>

        <a
          href="https://fitness-pro.ru/biblioteka/desyat-plyusov-dlya-zdorovya-ot-silovykh-trenirovok-dokazannykh-naukoy/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">Плюсы для здоровья от тренировок</button>
        </a>
      </span>

      {userEmail ? <span className={style.name}>{userEmail}</span> : <Link to={routes.auth}>AUTH</Link>}
    </header>
  );
};
