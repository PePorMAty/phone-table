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
  memory: number;
  screenRefreshRate: number;
  nfc: boolean;
  esim: boolean;
  wirelessСharging: boolean;
  price: number;
}

type TableRowNameType =
  | 'manufacturer'
  | 'releaseYear'
  | 'screenSize'
  | 'country'
  | 'memory'
  | 'refreshRate'
  | 'nfc'
  | 'esim'
  | 'inductive'
  | 'price';
