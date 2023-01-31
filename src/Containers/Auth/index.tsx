import React, { useEffect } from 'react';
import { AuthForm } from 'Components/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { UserSelectors, UserSliceActions } from 'Store';
import { useNavigate } from 'react-router';
import { routes } from 'Helpers/Constants/routes';

export const Auth = () => {
  const loading = useSelector(UserSelectors.getUserLoading);
  const token = useSelector(UserSelectors.getUserToken);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && token !== 'error') {
      navigate(routes.main);
      dispatch(UserSliceActions.setUserLoading(false));
    }
    if (token === 'error') {
      dispatch(UserSliceActions.setUserLoading(false));
    }
  }, [token]);

  return loading ? <h1>Loading...</h1> : <AuthForm />;
};
