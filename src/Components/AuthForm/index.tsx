import { Input } from 'Components/Common1/Input';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserSliceActions } from 'Store';
import style from './Auth.module.scss';

export const AuthForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const changelHandler =
    (fieldName: 'email' | 'password') => (event: ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => {
        const newData = { ...prev };
        newData[fieldName] = event.target.value;
        return newData;
      });
    };

  const submitHandler = () => {
    if (formState.password.length < 5) {
      setErrorMessage(' пороль слишком короткий ');
    } else {
      setErrorMessage('');
      dispatch(UserSliceActions.setUserLoading(true));
      // dispatch(UserSliceActions.setUserData({ email: formState.email, token: '123' }));
      setTimeout(
        () => dispatch(UserSliceActions.setUserData({ email: formState.email, token: '123' })),
        3000,
      );
      console.log(formState, 'Отправленна на сервер');
    }
  };
  // Альтернатива const submitHandler
  useEffect(() => {
    if (formState.password.length < 5 && formState.password !== '') {
      setErrorMessage('пороль слишком короткий');
    } else {
      setErrorMessage('');
    }
    console.log('отписка от изменений formState.password');
  }, [formState.password]);
  return (
    <div className={style.Auth}>
      <h1> AUTH FORM 1111 </h1>
      <h1> AUTH FORM 1111 </h1>
      <h1> AUTH FORM 1111 </h1>
      <div className={style.input_group}>
        <Input name={'Email'} value={formState.email} changeHandler={changelHandler('email')} />
        <Input
          name={'Password'}
          value={formState.password}
          changeHandler={changelHandler('password')}
          type="password"
        />
      </div>
      {errorMessage !== '' && <div className={style.error}>{errorMessage}</div>}
      <button type="button" onClick={submitHandler}>
        AUTH
      </button>
    </div>
  );
};
