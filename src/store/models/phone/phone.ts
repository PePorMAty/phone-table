export interface PhoneType {
  id: number;
  name: string;
  image: string;
  chars: CharsType;
}

export interface TableRowsType {
  rowName: TableRowNameType;
  rowTitle: string;
  rowChars: (string | boolean)[];
}

interface CharsType {
  model: string;
  releaseDate: number;
  screenDiagonal: number;
  countryOfOrigin: string;
  memory: string;
  screenRefreshRate: string;
  nfc: boolean;
  esim: boolean;
  wirelessСharging: boolean;
  price: string;
}

export type TableRowNameType =
  | 'model'
  | 'releaseDate'
  | 'screenDiagonal'
  | 'countryOfOrigin'
  | 'memory'
  | 'screenRefreshRate'
  | 'nfc'
  | 'esim'
  | 'wirelessСharging'
  | 'price';
