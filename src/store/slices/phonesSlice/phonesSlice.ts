import { createSelector, createSlice } from '@reduxjs/toolkit';

import { PhonesService } from '../../../api/services/PhonesService';
import { PhoneType, TableRowsType } from '../../models/phone/phone';

export interface InitialStatePhonesType {
  phones: PhoneType[];
  isError: boolean;
  isLoading: boolean;
  displayPhonesCount: number;
  tableRows: TableRowsType[];
}

const initialState: InitialStatePhonesType = {
  phones: [],
  isError: false,
  isLoading: false,
  displayPhonesCount: 3,
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
};

export const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {
    changeDisplayPhonesCount: (state, action) => {
      state.displayPhonesCount = action.payload;
    },
  },
  selectors: {
    selectDisplayedPhones: createSelector(
      [
        (state: InitialStatePhonesType) => state.phones,
        (state: InitialStatePhonesType) => state.displayPhonesCount,
      ],
      (phones, displayedPhonesCount) => phones.slice(0, displayedPhonesCount),
    ),
    selectDisplayPhonesCount: createSelector(
      (state: InitialStatePhonesType) => state.displayPhonesCount,
      (displayedPhonesCount) => displayedPhonesCount,
    ),
    selectTableRows: createSelector(
      (state: InitialStatePhonesType) => state.tableRows,
      (tableRows) => tableRows,
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
    builder.addCase(PhonesService.getPhones.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export const { changeDisplayPhonesCount } = phonesSlice.actions;

export const {
  selectDisplayedPhones,
  selectDisplayPhonesCount,
  selectTableRows,
} = phonesSlice.selectors;
