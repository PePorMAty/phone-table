import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { builders } from 'prettier/doc';
import data from '../../api/data/data.json';

interface initialStateI {
  phone: phoneI[];
  error: string | null;
}

interface phoneI {
  id: number;
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
  console.log(response);
  return response;
});

const initialState: initialStateI = {
  phone: [],
  error: null,
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhones.fulfilled, (state, action) => {
      state.phone = action.payload.phones;
    });
  },
});

export default phonesSlice.reducer;
