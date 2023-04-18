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
        <a className={style.a}
          href="https://fitness-pro.ru/biblioteka/desyat-plyusov-dlya-zdorovya-ot-silovykh-trenirovok-dokazannykh-naukoy/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">Плюсы для здоровья от тренировок</button>
        </a>
      </span>

      {userEmail ? (
        <span className={style.name}>{userEmail}</span>// в этом коде используется тернарный оператор. Он позволяет сделать условную отрисовку элементов в зависимости от наличия значения userEmail.Если userEmail есть (т.е. он не равен undefined, null, false, 0, NaN или пустой строке), то будет отрисован элемент <span> с классом style.name и значением userEmail. Если же userEmail нет (т.е. он равен одному из перечисленных выше значений), то будет отрисован элемент <Link> с пропсом to={routes.auth}, который перенаправляет пользователя на страницу авторизации.Таким образом, этот код позволяет отображать имя пользователя, если он авторизован, или ссылку на страницу авторизации, если пользователь не авторизован.

      ) : (
        <Link to={routes.auth} className={style.link} >AUTH</Link>
      )}
    </header>
  );
};
