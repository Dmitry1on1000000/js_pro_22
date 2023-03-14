import React from 'react';
import './App.css';
import { Main } from 'Containers/Main';
import { Routes, Route } from 'react-router-dom';
import { Posts } from 'Containers/Posts';
import { routes } from 'Helpers/Constants/routes';

function App() {
  return <Routes>
    <Route path={routes.main} element ={<Main />}/>
    <Route path={routes.posts} element ={<Posts />}/>
  </Routes>;
};

export default App;
