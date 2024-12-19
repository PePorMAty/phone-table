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
      const response = await baseUrl;
      const phonesData: PhoneI[] = await response;
      return { phonesData };
    },
  ),
};

export default PhonesService;
