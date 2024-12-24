import { createAsyncThunk } from '@reduxjs/toolkit';

import { PhoneI } from 'store/models/phone/phone';

import { baseUrl } from '../api';

export const PhonesService = {
  getPhones: createAsyncThunk(
    'phonesSlice/phones',
    async (): Promise<PhoneI[]> => {
      const response = await fetch(`${baseUrl}/data.json`);
      return response.json();
    },
  ),
};
