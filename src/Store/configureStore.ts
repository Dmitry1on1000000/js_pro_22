import { configureStore } from '@reduxjs/toolkit';
import { userSliceName, userSliceReducer } from './User/slice';
export const store = configureStore({
  reducer: {
    [userSliceName]: userSliceReducer,
  },
  devTools: true,
});

export type RootStateType = ReturnType<typeof store.getState>;
