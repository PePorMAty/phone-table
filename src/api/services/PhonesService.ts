import { createAsyncThunk } from '@reduxjs/toolkit';

import { PhoneI } from 'store/models/phone/phone';

import { baseUrl } from '../api';

interface GetPhonesDataResponse {
  phonesData: PhoneI[];
}

export const PhonesService = {
  getPhones: createAsyncThunk(
    'phonesSlice/phones',
    async (): Promise<GetPhonesDataResponse> => {
      const response = await fetch(`${baseUrl}/data.json`);
      const phonesData: PhoneI[] = await response.json();
      return { phonesData };
    },
  ),
};

export default PhonesService;
