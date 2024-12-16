import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getPhones from '../../../api/services/getPhones';
import { InitialStatePhonesI } from '../../models/phone/phone';

export const getPhonesData = createAsyncThunk(
  'phonesSlice/phones',
  async () => {
    const response = await getPhones();
    return response;
  },
);

const initialState: InitialStatePhonesI = {
  phones: [],
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhonesData.fulfilled, (state, action) => {
      state.phones = action.payload;
    });
  },
});

export default phonesSlice.reducer;
