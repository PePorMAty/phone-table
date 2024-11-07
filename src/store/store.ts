import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import phonesSlice from './slices/phonesSlice';

export const store = configureStore({
  reducer: {
    phones: phonesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
