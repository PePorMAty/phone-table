import { createSlice } from '@reduxjs/toolkit';

import { PhonesService } from '../../../api/services/PhonesService';

import { InitialStatePhonesI } from '../../models/phone/phone';

const initialState: InitialStatePhonesI = {
  phones: [],
  isError: false,
  isLoading: false,
  displayPhonesCount: 3,
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(PhonesService.getPhones.fulfilled, (state, action) => {
      state.phones = action.payload.phonesData;
    });
  },
});

export default phonesSlice.reducer;
