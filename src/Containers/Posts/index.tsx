import { CheckAuth } from 'Components/Common1/CheckAuth';

import { PostsList } from 'Components/Posts';
import React from 'react';
export const Posts = () => {
  return (
    <CheckAuth>
      <PostsList />
    </CheckAuth>
  );
};
