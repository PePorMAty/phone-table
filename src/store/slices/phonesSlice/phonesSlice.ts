import { createSelector, createSlice } from '@reduxjs/toolkit';

import { PhonesService } from '../../../api/services/PhonesService';
import { PhoneType, TableRowsType } from '../../models/phone/phone';

export interface InitialStatePhonesType {
  phones: PhoneType[];
  isError: boolean;
  isLoading: boolean;
  displayPhonesCount: number;
  tableRows: TableRowsType[];
  replaceItem: PhoneType[];
}

const initialState: InitialStatePhonesType = {
  phones: [],
  isError: false,
  isLoading: false,
  displayPhonesCount: 3,
  replaceItem: [],
  tableRows: [
    { rowName: 'model', rowTitle: 'Производитель', rowChars: [] },
    { rowName: 'releaseDate', rowTitle: 'Год релиза', rowChars: [] },
    {
      rowName: 'screenDiagonal',
      rowTitle: 'Диагональ экрана (дюйм)',
      rowChars: [],
    },
    {
      rowName: 'countryOfOrigin',
      rowTitle: 'Страна произоводитель',
      rowChars: [],
    },
    { rowName: 'memory', rowTitle: 'Объем памяти', rowChars: [] },
    {
      rowName: 'screenRefreshRate',
      rowTitle: 'Частота обновления экрана',
      rowChars: [],
    },
    { rowName: 'nfc', rowTitle: 'NFC', rowChars: [] },
    { rowName: 'esim', rowTitle: 'Поддержка eSIM', rowChars: [] },
    {
      rowName: 'wirelessСharging',
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
    replacePhone: (state, action) => {
      const indexItemToReplace = state.phones.findIndex(
        (phone) => phone.id === action.payload.cardId,
      );

      const indexReplacingItem = state.phones.findIndex(
        (phone) => phone.id === action.payload.id,
      );

      const newPhones = [...state.phones];
      const replacedPhone = newPhones[indexItemToReplace];
      const replacingPhone = newPhones[indexReplacingItem];

      newPhones[indexItemToReplace] = replacingPhone;
      newPhones[indexReplacingItem] = replacedPhone;
      state.phones = newPhones;
    },
  },
  selectors: {
    selectDisplayedPhones: createSelector(
      [
        (state: InitialStatePhonesType) => state.phones,
        (state: InitialStatePhonesType) => state.displayPhonesCount,
      ],
      (phones, displayPhonesCount) => phones.slice(0, displayPhonesCount),
    ),
    selectDisplayPhonesCount: createSelector(
      (state: InitialStatePhonesType) => state.displayPhonesCount,
      (displayedPhonesCount) => displayedPhonesCount,
    ),
    selectTableRows: createSelector(
      [
        (state: InitialStatePhonesType) => state.tableRows,
        (state: InitialStatePhonesType) => state.phones,
        (state: InitialStatePhonesType) => state.displayPhonesCount,
      ],
      (tableRows, phones, displayPhonesCount) =>
        tableRows.map((row) => ({
          ...row,
          rowChars: phones
            .slice(0, displayPhonesCount)
            .map((phone) => phone.chars[row.rowName]),
          rowName: row.rowName,
          rowTitle: row.rowTitle,
        })),
    ),
    selectReplacingPhones: createSelector(
      [
        (state: InitialStatePhonesType) => state.phones,
        (state: InitialStatePhonesType) => state.displayPhonesCount,
      ],
      (phones, displayPhonesCount) => phones.slice(displayPhonesCount),
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

export const { changeDisplayPhonesCount, replacePhone } = phonesSlice.actions;

export const {
  selectDisplayedPhones,
  selectDisplayPhonesCount,
  selectTableRows,
  selectReplacingPhones,
} = phonesSlice.selectors;
