import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getPhones from '../../../api/services/getPhones';
import { phoneI } from '../../models/phone/phone';

interface initialStateI {
  phone: phoneI[];
}

export const getPhonesData = createAsyncThunk(
  'phonesSlice/phones',
  async () => {
    const response = await getPhones();
    return response;
  },
);

const initialState: initialStateI = {
  phone: [],
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhonesData.fulfilled, (state, action) => {
      state.phone = action.payload;
    });
  },
});

export default phonesSlice.reducer;
