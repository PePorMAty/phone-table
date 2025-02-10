import { createAsyncThunk } from '@reduxjs/toolkit';

import { PhoneType } from 'store/models/phone/phone';

import phones from '../data/phones.json';

export const PhonesService = {
  getPhones: createAsyncThunk(
    'phonesSlice/phones',
    async (): Promise<PhoneType[]> => {
      const response = phones;
      return response;
    },
  ),
};
