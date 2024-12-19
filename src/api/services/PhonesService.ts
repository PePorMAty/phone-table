import { createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = '../../api';

export const PhonesService = {
  getPhones: createAsyncThunk('phonesSlice/phones', async () => {
    const response = await fetch(`${baseUrl}/data.json`);
    return response.json();
  }),
};

export default PhonesService;
