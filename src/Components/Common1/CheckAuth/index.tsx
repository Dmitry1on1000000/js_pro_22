import { routes } from 'Helpers/Constants/routes';
import { UserSelectors } from 'Store';
import React, { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

type CheckAuthPropsType = {
  children: ReactNode;
};

export const CheckAuth: FC<CheckAuthPropsType> = ({ children }) => {
  const token = useSelector(UserSelectors.getUserToken);
  if (!token) {
    // если токена нет , отправь нас на авторизацию
    return <Navigate to={routes.auth} />;
  }
  // если токен есть ,верни нам чилдрен
  return <>{ children}</>; /* эта штучка <></> называется реакт фрагмент ,
  она нужна чтобы не создавать новый узел в DOM, так как по правилам у нас реакт должен возвращать
  один родительский элемент(каждый компонент должен возвращать один корневой элемент). В данном случае { children} некие компонетны
    */
};
