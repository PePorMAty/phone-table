import { createSelector, createSlice } from '@reduxjs/toolkit';

import { PhonesService } from '../../../api/services/PhonesService';

import { InitialStatePhonesI } from '../../models/phone/phone';

const initialState: InitialStatePhonesI = {
  phones: [],
  isError: false,
  isLoading: false,
  tableRows: [
    { rowName: 'manufacturer', rowTitle: 'Производитель', rowChars: [] },
    { rowName: 'releaseYear', rowTitle: 'Год релиза', rowChars: [] },
    {
      rowName: 'screenSize',
      rowTitle: 'Диагональ экрана (дюйм)',
      rowChars: [],
    },
    { rowName: 'country', rowTitle: 'Страна произоводитель', rowChars: [] },
    { rowName: 'memory', rowTitle: 'Объем памяти', rowChars: [] },
    {
      rowName: 'refreshRate',
      rowTitle: 'Частота обновления экрана',
      rowChars: [],
    },
    { rowName: 'nfc', rowTitle: 'NFC', rowChars: [] },
    { rowName: 'esim', rowTitle: 'Поддержка eSIM', rowChars: [] },
    {
      rowName: 'inductive',
      rowTitle: 'Поддержка беспроводной зарядки',
      rowChars: [],
    },
    { rowName: 'price', rowTitle: 'Стоимость', rowChars: [] },
  ],
  displayPhonesCount: 3,
};

export const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {},
  selectors: {
    selectDisplayedPhones: createSelector(
      [
        (state: InitialStatePhonesI) => state.phones,
        (state: InitialStatePhonesI) => state.displayPhonesCount,
      ],
      (phones, displayedPhonesCount) => phones.slice(0, displayedPhonesCount),
    ),
  },
  extraReducers: (builder) => {
    builder.addCase(PhonesService.getPhones.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(PhonesService.getPhones.fulfilled, (state, action) => {
      state.isLoading = false;
      state.phones = action.payload;
    });
    builder.addCase(PhonesService.getPhones.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export const { selectDisplayedPhones } = phonesSlice.selectors;
