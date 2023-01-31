import { routes } from '../../../Helpers/Constants/routes';
import { UserSelectors } from 'Store';
import { useSelector } from 'react-redux';
import React, { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type CheckAuthPropsType = {
  children: ReactNode;
};

export const CheckAuth: FC<CheckAuthPropsType> = ({ children }) => {
  const token = useSelector(UserSelectors.getUserToken);

  if (!token) {
    return <Navigate to={routes.auth} />;
  }

  return <>{children}</>;
};
