import { MainContent } from 'Components/MainContent';
import React, { useEffect } from 'react';

export const Main = () => {
  console.log('Main');

  useEffect(() => {
    console.log('Main MOUNT');

    return () => console.log('Main UNMOUNT');
  }, []);

  return <MainContent />;
};
