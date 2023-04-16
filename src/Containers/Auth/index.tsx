import React, { useEffect } from 'react';
import { PageWrapper } from 'Components/Common1/PageWrapper';
import { AuthForm } from 'Components/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { UserSelectors, UserSliceActions } from 'Store';
import Style from './Auth.module.scss';
import { useNavigate } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';

export const Auth = () => {
  const loading = useSelector(UserSelectors.getUserLoading);
  const token = useSelector(UserSelectors.getUserToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      navigate(routes.main);
      dispatch(UserSliceActions.setUserLoading(false));
    }
  }, [token]);
  return (
    <PageWrapper>
      {loading ? <h1 className={Style.Loading}>Loading...</h1> : <AuthForm />}
    </PageWrapper>
  );
};
/*
изначально наш токен существует в виде пустой строки,
пустая строка в if это false значение и соответственно  navigate(routes.main) не сработает.
После того как мы подождём 3 секунды и токен обновится (эта логика прописана в ./Components/AuthForm)
пользователь становится авторизованным( у него есть токен) useEffect смотрит изначально значение было пустой строкой , а теперь стало 123 и теперь нужно выполнить свой эффект , который прописан.
Он проверяет токен строка 123 не  пустая строка , соответственно true и редеректнуть на главную стр navigate(routes.main);
useEffect(() => {
    if (token) {
      navigate(routes.main);

 */
