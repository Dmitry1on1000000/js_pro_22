import React, { useEffect } from 'react';
import { Main } from 'Containers/Main';
import { Posts } from 'Containers/Posts';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';
import { NotFound } from 'Containers/NotFound';
import { About } from 'Containers/About';
import { Auth } from 'Containers/Auth';
import { PageWrapper } from 'Components/Common/PageWrapper';

function App() {
  useEffect(() => {
    console.log('App MOUNT');
  }, []);

  return (
    <Routes>
      <Route path={routes.main} element={<PageWrapper />}>
        <Route index element={<Main />} />
        <Route path={routes.posts} element={<Posts />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.auth} element={<Auth />} />
        <Route path={routes.notFound} element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
