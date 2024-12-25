import { createAsyncThunk } from '@reduxjs/toolkit';

import { PhoneType } from 'store/models/phone/phone';

import { baseUrl } from '../api';

export const PhonesService = {
  getPhones: createAsyncThunk(
    'phonesSlice/phones',
    async (): Promise<PhoneType[]> => {
      const response = await fetch(`${baseUrl}/phones.json`);
      return response.json();
    },
  ),
};
