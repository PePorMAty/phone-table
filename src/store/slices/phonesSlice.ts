import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import data from '../../api/data/data.json';

interface initialStateI {
  phone: phoneI[];
}

interface phoneI {
  id: number;
  phoneImage: string;
  model: string;
  brand: string;
  releaseDate: number;
  screenDiagonal: number;
  countryOfOrigin: string;
  memory: number;
  screenRefreshRate: number;
  nfc: boolean;
  esim: boolean;
  wirelessСharging: boolean;
  price: number;
}

export const getPhones = createAsyncThunk('phonesSlice/phones', async () => {
  const response = await data;
  return response;
});

const initialState: initialStateI = {
  phone: [],
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhones.fulfilled, (state, action) => {
      state.phone = action.payload;
    });
  },
});

export default phonesSlice.reducer;
